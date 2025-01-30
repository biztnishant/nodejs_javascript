import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: mongoose.Schema.Types.Decimal128,
      required: false,
    },
    isActive: {
      type: Boolean,
      required: false,
    },
    quantity: {
      type: Number,
      required: false,
    },
    category: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Category'
      },
    // specifications: {
    //   type: Map,
    //   of: mongoose.Schema.Types.Mixed, // Allows any data type for the values
    // },

    image:{
      type:Buffer,required:false
    },

    //In this field i am using nested schema
    manufacturingAddress: [
      {
        street: { type: String, required: false },
        city: { type: String, required: false },
        state: { type: String, required: false },
        pinCode: { type: String, required: false },
      },
    ],
  },

  { timestamps: true }
); // add createdAt and updatedAt date throught timestamps

const ProductModel=mongoose.model("Product",ProductSchema);
export default ProductModel;
