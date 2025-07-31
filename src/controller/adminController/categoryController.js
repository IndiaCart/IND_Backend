import categoryModel from "../../model/admin/categorySchema.js";

// @desc    Create new category
// @route   POST /api/category
export const createCategory = async (req, res) => {
  try {
    const { name, slug, icon, description, isActive } = req.body;

    // Check for duplicate
    const existing = await categoryModel.findOne({ slug });
    if (existing) {
      return res.status(400).json({ success: false, message: "Category with this slug already exists" });
    }

    const newCategory = await categoryModel.create({
      name,
      slug,
      icon,
      description,
      isActive
    });

    res.status(201).json({ success: true, message: "Category created", data: newCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

/// @desc    Get all categories (with optional filters, pagination, sorting)
// @route   GET /api/category
export const getCategory = async (req, res) => {
  try {
    const { search, page, limit = 10, sort = "createdAt" } = req.query;

    const query = {};
    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    // If no pagination requested, return all
    if (!page) {
      const categories = await categoryModel.find(query).sort({ [sort]: 1 });

      return res.status(200).json({
        success: true,
        total: categories.length,
        data: categories,
      });
    }

    // If page is provided, apply pagination
    const skip = (page - 1) * limit;
    const categories = await categoryModel
      .find(query)
      .sort({ [sort]: 1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await categoryModel.countDocuments(query);

    return res.status(200).json({
      success: true,
      total,
      currentPage: parseInt(page),
      totalPages: Math.ceil(total / limit),
      data: categories,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};


// @desc    Get single category by ID or slug
// @route   GET /api/category/:id
export const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category =
      id.length === 24
        ? await categoryModel.findById(id)
        : await categoryModel.findOne({ slug: id });

    if (!category) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// @desc    Update category by ID
// @route   PUT /api/category/:id
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updated = await categoryModel.findByIdAndUpdate(id, updates, { new: true });

    if (!updated) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    res.status(200).json({ success: true, message: "Category updated", data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// @desc    Delete category by ID
// @route   DELETE /api/category/:id
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await categoryModel.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    res.status(200).json({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};
