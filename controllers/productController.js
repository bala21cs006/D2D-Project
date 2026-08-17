import Product from "../models/Product.js";
import fs from "fs";
import path from "path";

// =====================================================
// CREATE PRODUCT
// =====================================================

export const createProduct = async (req, res) => {
  try {
    console.log(
      "========== CREATE PRODUCT =========="
    );

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const {
      name,
      category,
      rating,
    } = req.body || {};

    // ================= VALIDATION =================

    if (
      !name ||
      !category ||
      rating === undefined ||
      rating === ""
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
        body: req.body,
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    // ================= CREATE =================

    const product = await Product.create({
      name: name.trim(),
      category: category.trim(),
      rating: Number(rating),
      image: `uploads/${req.file.filename}`,
    });

    console.log(
      "PRODUCT CREATED:",
      product
    );

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
    });

  } catch (error) {
    console.error(
      "CREATE PRODUCT ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================================
// GET ALL PRODUCTS
// =====================================================

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      products,
    });

  } catch (error) {
    console.error(
      "GET PRODUCTS ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================================
// GET PRODUCT BY ID
// =====================================================

export const getProductById = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const product =
      await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      product,
    });

  } catch (error) {
    console.error(
      "GET PRODUCT ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================================
// UPDATE PRODUCT
// =====================================================

export const updateProduct = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const {
      name,
      category,
      rating,
    } = req.body || {};

    console.log(
      "========== UPDATE PRODUCT =========="
    );

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    // ================= VALIDATION =================

    if (
      !name ||
      !category ||
      rating === undefined ||
      rating === ""
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // ================= FIND PRODUCT =================

    const product =
      await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // ================= UPDATE DATA =================

    product.name = name.trim();

    product.category =
      category.trim();

    product.rating =
      Number(rating);

    // ================= UPDATE IMAGE =================

    if (req.file) {
      // Delete old image
      if (product.image) {
        const oldImagePath =
          path.join(
            process.cwd(),
            product.image
          );

        if (
          fs.existsSync(oldImagePath)
        ) {
          fs.unlinkSync(
            oldImagePath
          );
        }
      }

      product.image =
        `uploads/${req.file.filename}`;
    }

    // ================= SAVE =================

    await product.save();

    return res.status(200).json({
      success: true,
      message:
        "Product updated successfully",
      product,
    });

  } catch (error) {
    console.error(
      "UPDATE PRODUCT ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================================
// DELETE PRODUCT
// =====================================================

export const deleteProduct = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const product =
      await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Delete image
    if (product.image) {
      const imagePath =
        path.join(
          process.cwd(),
          product.image
        );

      if (
        fs.existsSync(imagePath)
      ) {
        fs.unlinkSync(imagePath);
      }
    }

    await Product.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message:
        "Product deleted successfully",
    });

  } catch (error) {
    console.error(
      "DELETE PRODUCT ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};