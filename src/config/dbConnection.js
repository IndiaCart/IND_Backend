import dotenv from 'dotenv'
dotenv.config();
import mongoose from "mongoose";
import seedCategories from '../utils/adminUtils/seedCategories.js';
import seedSubCategories from '../utils/adminUtils/seedSubCategories.js';
import seedVariationTemplates from '../utils/adminUtils/seedVariationTemplates.js';

const connectDB  = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL).then(async()=>{
            console.log("Connected to MongoDB successfully")
            await seedCategories();
            await seedSubCategories();
            await seedVariationTemplates();
        })

    }catch(error){
        console.log(error.message)
    }
}

export default connectDB;