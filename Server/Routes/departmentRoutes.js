import express from "express";
import { validateDepartment } from "../Middlewares/validateDepartment.js";
import {
  addWork,
  departmentDashboardController,
} from "../Controllers/departmentControllers.js";

const router = express.Router();

router.post(
  "/department/dashboard",
  validateDepartment,
  departmentDashboardController
);

router.post("/addWorks", validateDepartment, addWork);

export default router;
