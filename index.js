import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();

// ================= MIDDLEWARE =================

app.use(cors());

app.use(express.json());

// ================= UPLOADS =================

app.use(
  "/uploads",
  express.static("uploads")
);

// ================= ROUTES =================

app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/admin",
  adminRoutes
);

// ================= MONGODB =================

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/adminlogin"
  )
  .then(() => {
    console.log(
      "MongoDB connected"
    );
  })
  .catch((error) => {
    console.error(
      "MongoDB connection error:",
      error
    );
  });

// ================= SERVER =================

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});