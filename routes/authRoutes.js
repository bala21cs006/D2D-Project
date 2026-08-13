import express from "express";

import {
  adminRegister,
  adminLogin,
} from "../controllers/authController.js";

const router = express.Router();

// ===============================
// Admin Register
// POST /api/auth/register
// ===============================

router.post("/register", adminRegister);

// ===============================
// Admin Login
// POST /api/auth/login
// ===============================

router.post("/login", adminLogin);

export default router;