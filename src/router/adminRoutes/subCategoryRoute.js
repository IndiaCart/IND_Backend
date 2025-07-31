// routes/admin/subCategoryRoutes.js

import express from 'express';
import {
  createSubCategory,
  getAllSubCategories,
  getSubCategoryById,
  updateSubCategory,
  deleteSubCategory,
} from '../../controller/adminController/subCategoryController.js';

const subCategoryRouter = express.Router();

// Create a new subcategory
subCategoryRouter.post('/', createSubCategory);

// Get all subcategories (with optional filters or population)
subCategoryRouter.get('/', getAllSubCategories);

// Get single subcategory by ID
subCategoryRouter.get('/:id', getSubCategoryById);

// Update a subcategory
subCategoryRouter.put('/:id', updateSubCategory);

// Delete a subcategory
subCategoryRouter.delete('/:id', deleteSubCategory);

export default subCategoryRouter;
