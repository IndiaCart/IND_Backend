import mongoose from 'mongoose';
import productModel from '../../model/admin/productSchema.js';
import categoryModel from '../../model/admin/categorySchema.js';
import subCategoryModel from '../../model/admin/subCategorySchema.js';

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      brand,
      selectedCategory,
      selectedSubCategory,
      images,
      stock,
      variations
    } = req.body;
    const category = selectedCategory;
    const subCategory = selectedSubCategory;
    // Validate category
    if (!mongoose.Types.ObjectId.isValid(category)) {
      return res.status(400).json({ message: 'Invalid category ID' });
    }
    const cat = await categoryModel.findById(category);
    if (!cat) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Validate subCategory if provided
    let subCat = null;
    if (subCategory) {
      if (!mongoose.Types.ObjectId.isValid(subCategory)) {
        return res.status(400).json({ message: 'Invalid subCategory ID' });
      }
      subCat = await subCategoryModel.findById(subCategory);
      if (!subCat) {
        return res.status(404).json({ message: 'SubCategory not found' });
      }
      if (!subCat.Category.equals(cat._id)) {
        return res.status(400).json({ message: 'SubCategory does not belong to the specified Category' });
      }
    }

    const newProduct = new productModel({
      name,
      description,
      price,
      brand,
      category: cat._id,
      subCategory: subCat?._id || null,
      images,
      stock,
      variations
    });

    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getProducts = async (req, res) => {
  try {
    const {
      category,
      subCategory,
      search,
      page,
      limit = 20,
      sortBy,
      order = 'asc',
    } = req.query;

    const filter = {};

    if (category && mongoose.Types.ObjectId.isValid(category)) {
      filter.category = category;
    }

    if (subCategory && mongoose.Types.ObjectId.isValid(subCategory)) {
      filter.subCategory = subCategory;
    }

    if (search) {
      filter.name = { $regex: search, $options: 'i' };
    }

    const sort = {};
    if (sortBy) {
      sort[sortBy] = order === 'desc' ? -1 : 1;
    }

    // If `page` is provided → Paginated response
    if (page) {
      const skip = (parseInt(page, 10) - 1) * parseInt(limit, 10);

      const [total, products] = await Promise.all([
        productModel.countDocuments(filter),
        productModel
          .find(filter)
          .populate('category', 'name')
          .populate('subCategory', 'name')
          .sort(sort)
          .skip(skip)
          .limit(parseInt(limit, 10)),
      ]);

      return res.status(200).json({
        success: true,
        total,
        page: parseInt(page, 10),
        pages: Math.ceil(total / limit),
        products,
      });
    }

    // If no `page` → Return all results
    const products = await productModel
      .find(filter)
      .populate('category', 'name')
      .populate('subCategory', 'name')
      .sort(sort);

    return res.status(200).json({
      success: true,
      total: products.length,
      products,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
};

// Get single product by ID or slug
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const query = mongoose.Types.ObjectId.isValid(id) ? { _id: id } : { slug: id };

    const product = await productModel.findOne(query)
      .populate('category', 'name')
      .populate('subCategory', 'name');

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update product by ID
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }

    const updateData = { ...req.body };
    if (updateData.category) {
      const cat = await categoryModel.findById(updateData.category);
      if (!cat) {
        return res.status(404).json({ message: 'Category not found' });
      }
    }
    if (updateData.subCategory) {
      const subCat = await subCategoryModel.findById(updateData.subCategory);
      if (!subCat) {
        return res.status(404).json({ message: 'SubCategory not found' });
      }
    }

    const updated = await productModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true
    });
    if (!updated) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updated);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete product by ID
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }

    const deleted = await productModel.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export default {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
