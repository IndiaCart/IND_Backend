import categoryModel from '../../model/admin/categorySchema.js';
import subCategoryModel from '../../model/admin/subCategorySchema.js';
import VariationModel from '../../model/admin/variationTemplateModel.js';
import variationTemplates from '../../seeders/adminSeedData/variationTemplates.js';
const seedVariationTemplates = async () => {
  try {
    const Count = await VariationModel.countDocuments();
    if (Count == 0) {
      console.log('🚀 Starting variation‐template seeding...\n');
      let totalInserted = 0;

      for (const { category, variations, subcategories } of variationTemplates) {
        // 1️⃣ Find parent category
        const parentCat = await categoryModel.findOne({ name: category });
        if (!parentCat) {
          console.warn(`⚠️ Category "${category}" not found. Skipping.`);
          continue;
        }

        // 2️⃣ Seed category‐level variationTemplate
        if (Array.isArray(variations) && variations.length) {
          const existsCat = await VariationModel.findOne({
            category: parentCat._id,
            subCategory: null
          });
          if (!existsCat) {
            await VariationModel.create({
              category: parentCat._id,
              subCategory: null,
              fields: variations.map(({ name, type, options }) => ({
                name,
                type,
                options: options || []
              }))
            });
            totalInserted++;
            console.log(`✅ [Category] Created variationTemplate for "${category}"`);
          }
        }

        // 3️⃣ Seed each subcategory‐level variationTemplate
        if (Array.isArray(subcategories)) {
          for (const { name: subName, variations: subVars } of subcategories) {
            const parentSub = await subCategoryModel.findOne({
              name: subName,
              Category: parentCat._id
            });
            if (!parentSub) {
              console.warn(`   ⚠️ SubCategory "${subName}" under "${category}" not found. Skipping.`);
              continue;
            }

            const existsSub = await VariationModel.findOne({
              category: parentCat._id,
              subCategory: parentSub._id
            });

            if (!existsSub && Array.isArray(subVars) && subVars.length) {
              await VariationModel.create({
                category: parentCat._id,
                subCategory: parentSub._id,
                fields: subVars.map(({ name, type, options }) => ({
                  name,
                  type,
                  options: options || []
                }))
              });
              totalInserted++;
              console.log(`✅ [SubCat] Created variationTemplate for "${subName}"`);
            }
          }
        }
      }

      console.log(`\n🎉 Seeding complete. Total variationTemplates inserted: ${totalInserted}`);

    }else{
      console.log('VariationTemplates already exist.');
    }
  } catch (error) {
    console.error('Error during variationTemplate seeding:', error);
  }
};

export default seedVariationTemplates;
