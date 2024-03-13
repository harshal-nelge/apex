import express from "express";
import { validateDepartment } from "../Middlewares/validateDepartment.js";
import { departmentDashboardController } from "../Controllers/departmentControllers.js";

const router = express.Router();

router.post(
  "/department/dashboard",
  validateDepartment,
  departmentDashboardController
);



export default router;
