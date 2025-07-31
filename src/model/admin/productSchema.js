import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  price: { type: Number, required: true, min: 0.01 },
  brand: { type: String, trim: true },
  tags: [{ type: String, trim: true }],
  hasDiscount: {
    type: Boolean,
    default: false
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: false
  },
  images: [
    {
      fileId: { type: String, trim: true },
      url: { type: String, trim: true },
    }
  ],
  stock: { type: Number, default: 0 },
  sku: { type: String, trim: true },
  variations: [
    {
      name: String, // e.g., "Size"
      options: [String] // e.g., ["S", "M", "L"]
    }
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const productModel = mongoose.model('Product', productSchema);
export default productModel;
