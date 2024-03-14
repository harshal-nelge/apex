import express from "express";
import { validateDepartment } from "../Middlewares/validateDepartment.js";
import {
  addWork,
  departmentDashboardController,
  myWorks,
} from "../Controllers/departmentControllers.js";

const router = express.Router();

router.post(
  "/department/dashboard",
  validateDepartment,
  departmentDashboardController
);

router.post("/department/addWorks", validateDepartment, addWork);
router.post("/department/myWorks", validateDepartment, myWorks);

export default router;
