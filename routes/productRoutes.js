//  const express=require('express');
 import express from "express";
// const {
//   CreateProduct,
//   getAllProducts,
//   updateProduct,
//   deleteProduct,
//   processProductAddresses,
//   getProductById,
// } = require("../controller/product.js");
import {CreateProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  processProductAddresses,
  getProductById,} from "../controller/product.js";
import {uploadToMemory} from "../middleware/upload.js";
const router=express.Router();
router.post("/createProduct", CreateProduct,uploadToMemory.single('image'));
router.get("/getAllProducts",getAllProducts);
router.put("/updateProduct/:id",updateProduct);
router.delete("/deleteProduct/:id",deleteProduct);
router.get("/processProductAddresses", processProductAddresses);
router.get("/getProductById/:id", getProductById);
//  module.exports=router;
export default router;