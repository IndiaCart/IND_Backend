import categoryModel from '../../model/admin/categorySchema.js';
import subCategoryModel from '../../model/admin/subCategorySchema.js';
import subCategoryTemplates from '../../seeders/adminSeedData/subCategorySeedData.js';

const seedSubCategories = async () => {
  try {
    const subCategoryCount = await subCategoryModel.countDocuments();

    if (subCategoryCount == 0) {
      console.log('⚙️ Seeding Subcategories...');

      for (const template of subCategoryTemplates) {
        // Use the correct model: categoryModel
        const parentCategory = await categoryModel.findOne({ name: template.category });

        if (!parentCategory) {
          console.warn(`Category "${template.category}" not found. Skipping...`);
          continue;
        }

        // Prepare subcategory documents
        const subCategoryDocs = await Promise.all(
          template.subcategories.map(async (subName) => {
            const exists = await subCategoryModel.findOne({
              name: subName,
              Category: parentCategory._id,
            });

            if (exists) return null;

            return {
              name: subName,
              image: '', // Optional: add default image
              Category: parentCategory._id,
            };
          })
        );

        // Filter out nulls (already existing)
        const toInsert = subCategoryDocs.filter(doc => doc !== null);

        if (toInsert.length > 0) {
          await subCategoryModel.insertMany(toInsert);
          console.log(`✅ Inserted ${toInsert.length} subcategories under "${template.category}"`);
        } else {
          console.log(`ℹ️ All subcategories under "${template.category}" already exist`);
        }
      }

      console.log('🎉 Subcategories seeding completed.');
    } else {
      console.log('Subcategories already exist.');
    }
  } catch (error) {
    console.error(' Error seeding subcategories:', error.message);
  }
};
export default seedSubCategories;
