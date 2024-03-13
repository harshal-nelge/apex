import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./Routes/authRoutes.js";
import departmentRoutes from "./Routes/departmentRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch("something went wrong in DB connection");

app.use("/auth", authRoutes);

app.use("/v1", departmentRoutes);
app.use("/v1", adminRoutes);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server listening on port ${process.env.SERVER_PORT}`);
});
