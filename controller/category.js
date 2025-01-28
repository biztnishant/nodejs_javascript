import CategoryModel from "../models/category.js";
import { AppError } from "../errorhandler.js";

export const createCategory = async (req, res) => {
  try {
    const categoryData = await CategoryModel.create(req.body);
    res.status(200).json({ message: "Category created successfully" });
  } catch (e) {
    next(error);
  }
};
export const getAllCategories=async(req,res)=>{
   try{
     const category=await CategoryModel.find();
     if(!category.length){
      throw new AppError("product not found",404);
     }
    res.status(200).json({message:"Successfully fetched categories",category});
   }catch(error){
     next(error);
   }
};