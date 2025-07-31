import subCategoryModel from '../../model/admin/subCategorySchema.js';
import categoryModel from '../../model/admin/categorySchema.js';

// Create Subcategory
export const createSubCategory = async (req, res) => {
  try {
    const { name, image, Category } = req.body;

    const categoryExists = await categoryModel.findById(Category);
    if (!categoryExists) {
      return res.status(400).json({ success: false, message: 'Invalid Category ID' });
    }

    const subCategory = new subCategoryModel({ name, image, Category });
    await subCategory.save();

    res.status(201).json({ success: true, data: subCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Get All Subcategories (with optional pagination)
export const getAllSubCategories = async (req, res) => {
  try {
    const { page, limit = 10, search, sort = "createdAt" } = req.query;

    const query = {};
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    // If no pagination, return all subcategories
    if (!page) {
      const allSubCategories = await subCategoryModel
        .find(query)
        .populate("Category", "name")
        .sort({ [sort]: 1 });

      return res.status(200).json({
        success: true,
        total: allSubCategories.length,
        data: allSubCategories,
      });
    }

    // If page is provided, paginate results
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const [total, subCategories] = await Promise.all([
      subCategoryModel.countDocuments(query),
      subCategoryModel
        .find(query)
        .populate("Category", "name")
        .sort({ [sort]: 1 })
        .skip(skip)
        .limit(parseInt(limit)),
    ]);

    res.status(200).json({
      success: true,
      total,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
      data: subCategories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// Get Single Subcategory by ID
export const getSubCategoryById = async (req, res) => {
  try {
    const subCategory = await subCategoryModel
      .findById(req.params.id)
      .populate('Category', 'name');

    if (!subCategory) {
      return res.status(404).json({ success: false, message: 'SubCategory not found' });
    }

    res.status(200).json({ success: true, data: subCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Update Subcategory
export const updateSubCategory = async (req, res) => {
  try {
    const { name, image, Category } = req.body;

    const updatedSubCategory = await subCategoryModel.findByIdAndUpdate(
      req.params.id,
      { name, image, Category },
      { new: true }
    );

    if (!updatedSubCategory) {
      return res.status(404).json({ success: false, message: 'SubCategory not found' });
    }

    res.status(200).json({ success: true, data: updatedSubCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// Delete Subcategory
export const deleteSubCategory = async (req, res) => {
  try {
    const deleted = await subCategoryModel.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'SubCategory not found' });
    }

    res.status(200).json({ success: true, message: 'SubCategory deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};
