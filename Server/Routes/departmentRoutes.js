import express from "express";
import { validateDepartment } from "../Middlewares/validateDepartment";
import { departmentDashboardController } from "../Controllers/departmentControllers";

const router = express.Router();

router.post(
  "/department/dashboard",
  validateDepartment,
  departmentDashboardController
);



export default router;
