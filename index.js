// const express = require('express');
import express from 'express';  // Correct ES Module import
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// const cors = require('cors');
// const dotenv = require('dotenv');
// const mongoose=require('mongoose');
// const multer=require('multer');
 import productRoutes from './routes/productRoutes.js';
// const productRoutes=require('./routes/productRoutes.js');
import categoryRoutes from './routes/categoryRoutes.js';
// const categoryRoutes=require("../Server/routes/categoryRoutes.js");
import { errorMiddleware } from './middleware/errorMiddleware.js';
// const { errorMiddleware } = require('./middleware/errorMiddleware.js');


dotenv.config();
const app = express();
//middleware
app.use(express.json());
app.use(cors());
app.use('/api',productRoutes);
app.use('/api', categoryRoutes);

app.use(errorMiddleware);
// app.all("*", () => {
//   next(new AppError(`Cannot find ${req.originalUrl} on this server`, 404));
// });
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));


//establish connection with database
mongoose
  .connect("mongodb://127.0.0.1:27017/_nodejsDb")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log("Server running at the port number:" + process.env.PORT);
    });
  })
  .catch((e) => {
    console.log("Error in connecting to MongoDB", e);
  });
