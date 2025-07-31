import express from 'express';
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../../controller/adminController/productController.js';

const productRouter = express.Router();

// Create a new product
productRouter.post('/', createProduct);

// Get list of products (with filters, pagination, sorting)
productRouter.get('/', getProducts);

// Get single product by ID or slug
productRouter.get('/:id', getProductById);

// Update product by ID
productRouter.put('/:id', updateProduct);

// Delete product by ID
productRouter.delete('/:id',deleteProduct);

export default productRouter;
