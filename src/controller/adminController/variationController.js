// controllers/variationTemplate.controller.js
import VariationModel from '../../model/admin/variationTemplateModel.js';
import categoryModel from '../../model/admin/categorySchema.js';
import subCategoryModel from '../../model/admin/subCategorySchema.js';

// CREATE
export const createVariationTemplate = async (req, res) => {
  try {
    const { category, subCategory, fields } = req.body;

    const existing = await VariationModel.findOne({ category, subCategory });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'Template already exists for this category/subcategory.',
      });
    }

    const variationTemplate = await VariationModel.create({ category, subCategory, fields });
    res.status(201).json({ success: true, data: variationTemplate });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};

// READ - All
export const getAllVariationTemplates = async (req, res) => {
  try {
    const templates = await VariationModel.find()
      .populate('category', 'name')
      .populate('subCategory', 'name');

    res.status(200).json({ success: true, data: templates });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};

// READ - One
export const getVariationTemplateById = async (req, res) => {
  try {
    const template = await VariationModel.findById(req.params.id)
      .populate('category', 'name')
      .populate('subCategory', 'name');

    if (!template) {
      return res.status(404).json({
        success: false,
        message: 'Template not found',
      });
    }

    res.status(200).json({ success: true, data: template });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};

// UPDATE
export const updateVariationTemplate = async (req, res) => {
  try {
    const updated = await VariationModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Template not found',
      });
    }

    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};

// DELETE
export const deleteVariationTemplate = async (req, res) => {
  try {
    const deleted = await VariationModel.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Template not found',
      });
    }

    res.status(200).json({ success: true, message: 'Template deleted successfully' });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};
