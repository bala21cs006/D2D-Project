import express from "express";

import {
  createProduct,
  getProducts,
} from "../controllers/productController.js";

import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// ===============================
// Create Product
// POST /api/products
// ===============================

router.post(
  "/",
  upload.single("image"),
  createProduct
);

// ===============================
// Get Products
// GET /api/products
// ===============================

router.get("/", getProducts);

export default router;