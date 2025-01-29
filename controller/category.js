import CategoryModel from "../models/category.js";
import { AppError } from "../errorhandler.js";
import { successHandler } from "../middleware/successHanlder.js";
export const createCategory = async (req, res,next) => {
  try {
    const categoryData = await CategoryModel.create(req.body);
    // res.status(200).json({ message: "Category created successfully",data:categoryData});
    successHandler(res,"Created successfully",categoryData,201);
  } catch (error) {
    next(error);
  }
};
export const getAllCategories=async(req,res,next)=>{
   try{
     const category=await CategoryModel.find();
     if(!category.length){
      throw new AppError("product not found",404);
     }
    // res.status(200).json({message:"Successfully fetched categories",data:category});
    successHandler(res,"successfully fetched categories",category);
   }catch(error){
     next(error);
   }
};