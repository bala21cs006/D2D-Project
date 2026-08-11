import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const { name, category, rating } = req.body;

    if (!name || !category || rating === undefined || !req.file) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const imagePath = `uploads/${req.file.filename}`;

    const product = await Product.create({
      name,
      image: imagePath,
      category,
      rating: Number(rating),
    });

    console.log("PRODUCT SAVED:", product);

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.log("CREATE PRODUCT ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({
      createdAt: -1,
    });

    console.log("PRODUCTS FROM DB:", products);

    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Get Products Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};