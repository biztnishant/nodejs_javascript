import mongoose from "mongoose";
const CategorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
})
const CategoryModel=mongoose.model("Category",CategorySchema);
export default CategoryModel;