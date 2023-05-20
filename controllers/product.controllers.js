import ProductModel from "../models/product.model.js";

export const createProduct = async (req, res) => {
  const { category, price } = req.body;
  const categories = ["breakfast", "lunch", "dinner", "other"];
  try {
    if (!categories.includes(category) || price < 10 || price > 300) {
      return res.status(400).json({
        status: "failed",
        message:
          "Make sure the category is breakfast, lunch, dinner, or other and the price is between 10 and 300",
      });
    }
    const product = new ProductModel(req.body);
    product.save();
    return res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (error) {
    console.log(err);
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json({
      status: "success",
      data: products,
    });
  } catch (error) {
    console.log(err);
  }
};

export const getOneProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);
    res.json({
      status: "success",
      data: product,
    });
  } catch (error) {
    console.log(err);
  }
};

export const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const products = await ProductModel.find({ category: category });
    res.json({
      status: "success",
      data: products,
    });
  } catch (error) {
    console.log(err);
  }
};

export const getProductsByContents = async (req, res) => {
  const { contents } = req.body;
  try {
    const contentsArray = contents.split(",");
    const allProducts = await ProductModel.find();
    const productsWithContents = allProducts.filter((p) => {
      contentsArray.forEach((element) => {
        return p.contents.includes(element);
      });
    });
    res.json({
      status: "success",
      data: productsWithContents,
    });
  } catch (error) {
    console.log(err);
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.json({
      status: "success",
      data: product,
    });
  } catch (error) {
    console.log(err);
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndDelete(id);
    res.json({
      status: "success",
      message: `product ${id} deleted successfully`,
    });
  } catch (error) {
    console.log(err);
  }
};
