import Category from "../../model/admin/categorySchema.js"
import categorySeedData from "../../seeders/adminSeedData/categorySeedData.js";

const seedCategories = async () => {
  try {
    const count = await Category.countDocuments();

    if (count === 0) {
      await Category.insertMany(categorySeedData);
      console.log('Categories seeded successfully');
    }
  } catch (error) {
    console.error('Error while seeding categories:', error.message);
  }
};

export default seedCategories;
