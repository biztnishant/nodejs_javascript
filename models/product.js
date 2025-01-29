import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: mongoose.Schema.Types.Decimal128,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: Map,
      of:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Category'
      }
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
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pinCode: { type: String, required: true },
      },
    ],
  },

  { timestamps: true }
); // add createdAt and updatedAt date throught timestamps

const ProductModel=mongoose.model("Product",ProductSchema);
export default ProductModel;
