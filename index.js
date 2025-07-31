import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 
import cookieParser from 'cookie-parser'; 
import userAuthRouter from './src/router/UserAuthRoute.js';
import connectDB from './src/config/dbConnection.js';
import errorHandler from './src/middleware/errorHandler.js';
import mediaContentRoute from './src/router/mediaContentRoutes.js';
import userModel from './src/model/userModel.js';
import productRouter from './src/router/adminRoutes/productRoute.js';
import categoryRouter from './src/router/adminRoutes/categoryRoute.js';
import subCategoryRouter from './src/router/adminRoutes/subCategoryRoute.js';
import VariationRouter from './src/router/adminRoutes/variationRoutes.js';
const app = express();

//Initialize dotenv
dotenv.config();

// Middleware
app.use(cors({
  origin: "*",
  credentials: true              
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Error-handling middleware (should come last)
app.use(errorHandler);

// Log every Route
app.use((req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });

  next();
});

// Routes
app.use("/api/v1/auth", userAuthRouter);
app.use("/api/v1/media", mediaContentRoute);

// Admin Product Route
app.use("/api/v1/product" , productRouter)
app.use("/api/v1/category" , categoryRouter)
app.use("/api/v1/subCategory" , subCategoryRouter)
app.use('/api/v1/variation-template', VariationRouter);


// Admin registration route
app.get('/registerAdmin', async (req, res) => {
  try {
    const email = "admin@ecomm.com";

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered"
      });
    }

    const user = await userModel.create({
      name: "test Admin",
      email: email,
      password: "admin123",
      role:"admin",
      phoneNumber:"8434381886"
    });

    res.status(201).json({
      success: true,
      message: "Admin registered successfully",
      email: user.email,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});


//Home route
app.get('/', (req, res) => {
  res.send('Welcome to the E-COMM API');
});


connectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});