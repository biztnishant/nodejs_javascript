import ProductModel from "../models/product.js";
import { AppError } from "../errorhandler.js";
import { successHandler } from "../middleware/successHanlder.js";

export const CreateProduct = async (req,res,next)=>{
    try{
      
      const {name,description,price,isActive,quantity,category,manufacturingAddress}=req.body;
      const image=req.file?.buffer;
      console.log(req.file);
      console.log(req.body);
      const productData=await ProductModel.create({
        name,
        description,
        price,
        isActive,
        quantity,
        category,
        manufacturingAddress,
        image,
      });
      //  res.status(200).json({message:"Product created successfully",data:productData});
      successHandler(res,"successfully created",productData,201);
    }catch(error){
       next(error);
    }
};
export const getAllProducts = async (req, res,next) => {
    try {
      const products = await ProductModel.find();
      if(!products.length){
        throw new AppError("product not found",404)
      }
      // res.status(200).json({ message: "Products fetched successfully", data: products });
      successHandler(res,"successfully fetched",products);
    } catch (error) {
      next(error);
    }
  };
  export const updateProduct=async(req,res,next)=>{
    try{
        const {id}=req.params;
        const productData=req.body;
        const updateProduct=await ProductModel.findByIdAndUpdate(id,productData,{
            new:true
        });
        if(!updateProduct){
           throw new AppError("Product not found",404);
        }
        // res.status(200).json({message:"Update data successfully",data:updateProduct});
        successHandler(res,"updated successfully",updateProduct);
    }catch(error){
       next(error);
    }
  };
  export const deleteProduct=async(req,res,next)=>{
    try{
        const {id}=req.params;
        const deleteProduct=await ProductModel.findByIdAndDelete(id);
        if(!deleteProduct){
            throw new AppError("product not found ",404);
        }
        // res.status(200).json({message:"Successfully deleted data",data:deleteProduct});
        successHandler(res,"Deleted successfully",deleteProduct);
    }catch(error){
       next(error);
    }
  };

export const processProductAddresses = async (req, res,next) => {
  try {
    const products = await ProductModel.find();

    const processedProducts = products.map((product) => {
      // Use `map` to iterate and process each manufacturing address
      const processedAddresses = product.manufacturingAddress.map((address) => {
        // Example: Add a formatted address and categorize by state
        return {
          fullAddress: `${address.street}, ${address.city}, ${address.state}, ${address.pinCode}`,
        
        };
      });

      return {
        id: product._id,
        name: product.name,
        category: product.category,
        price: parseFloat(product.price.toString()),
        isActive:product.isActive,
        manufacturingAddresses: processedAddresses, // Transformed addresses
      };
    });

    // res.status(200).json({
    //   message: "Processed products fetched successfully",
    //   data: processedProducts,
    // });
    successHandler(res, "Processed products fetched successfully",processedProducts);
  } catch (error) {
   next(error);
  }
};
export const getProductById=async(req,res,next)=>{ 
   try{
      const { id } = req.params;
  const productData = req.body;
   // select function used while we fetch selected fields from the database then we use a select
  // const getProduct=await ProductModel.findById(id).select('name category');
  const getProduct=await ProductModel.findById(id,productData);
  if(!getProduct){
   throw new AppError("Product not found",404);
  }
  // res.status(200).json({message:"Product found",data:getProduct});
  successHandler(res,"Successfully fetech product with productId",getProduct);
   }catch(error){
    next(error);
   }
};

