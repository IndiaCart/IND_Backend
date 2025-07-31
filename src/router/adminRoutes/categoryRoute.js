import express from 'express';
import { createCategory, deleteCategory, getCategoryById, getCategory, updateCategory } from '../../controller/adminController/categoryController.js';

const categoryRouter = express.Router();

// Create a new Category
categoryRouter.post('/', createCategory);

// Get list of Categorys (with filters, pagination, sorting)
categoryRouter.get('/', getCategory);

// Get single Category by ID or slug
categoryRouter.get('/:id', getCategoryById);

// Update Category by ID
categoryRouter.put('/:id', updateCategory);

// Delete Category by ID
categoryRouter.delete('/:id',deleteCategory);

export default categoryRouter;
