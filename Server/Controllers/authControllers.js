import mongoose from "mongoose";
import departmentModels from "../Model/department.models.js";
import jwt from "jsonwebtoken";
import adminModels from "../Model/admin.models.js";
import bcrypt from "bcrypt";

export const registerDepartment = async (req, res) => {
  const request = req.body;
  const username = request.username;
  const password = request.password;
  const departmentName = request.departmentName;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newDepartment = new departmentModels({
    username,
    password: hashedPassword,
    departmentName,
  });
  newDepartment.save().then(() => {
    const payload = { userName: username, password: password };
    const token = jwt.sign(payload, process.env.JWT_SECRETKEY, {
      expiresIn: "7d",
    });

    res.json({ token });
  });
};

export const loginDepartment = async (req, res) => {
  const request = req.body;
  const username = request.username;
  const password = request.password;
  const department = await departmentModels.findOne({ username });

  const isValidPassword = await bcrypt.compare(password, department.password);

  if (isValidPassword) {
    const payload = { userName: username, password: password };
    const token = jwt.sign(payload, process.env.JWT_SECRETKEY, {
      expiresIn: "7d",
    });

    res.json({ token });
  }
};

export const registerAdmin = async (req, res) => {
  const request = req.body;
  const username = request.username;
  const password = request.password;
  const adminName = request.adminName;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newDepartment = new adminModels({
    username,
    password: hashedPassword,
    adminName,
  });
  newDepartment.save().then(() => {
    const payload = { userName: username, password: password };
    const token = jwt.sign(payload, process.env.JWT_SECRETKEY, {
      expiresIn: "7d",
    });

    res.send({ token });
  });
};

export const loginAdmin = async (req, res) => {
  const request = req.body;
  const username = request.username;
  const password = request.password;

  const admin = await adminModels.findone({ username });

  const isValidPassword = await bcrypt.compare(password, admin.password);

  if (isValidPassword) {
    const payload = { userName: username, password: password };
    const token = jwt.sign(payload, process.env.JWT_SECRETKEY, {
      expiresIn: "7d",
    });

    res.json({ token });
  }
};
