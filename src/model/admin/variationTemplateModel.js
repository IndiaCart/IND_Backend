import mongoose from 'mongoose';

const variationTemplateSchema = new mongoose.Schema({
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  subCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'SubCategory', default: null },
  fields: [
    {
      name: { type: String, required: true },    // e.g., Size, Color
      type: { type: String, enum: ['text', 'dropdown'], default: 'dropdown' },
      options: { type: [String], default: [] },   // ['S', 'M', 'L', 'XL']
    },
  ],
}, {
  timestamps: true,
});

// Ensure only one variation template per category/subCategory combination
variationTemplateSchema.index(
  { category: 1, subCategory: 1 },
  { unique: true }
);

const VariationModel = mongoose.model('VariationTemplate', variationTemplateSchema);
export default VariationModel;