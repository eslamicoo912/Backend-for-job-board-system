import mongoose from "mongoose";

const Product = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  contents: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
});

const ProductModel = mongoose.model("ProductModel", Product);

export default ProductModel;
