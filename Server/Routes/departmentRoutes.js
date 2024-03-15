import express from "express";
import { validateDepartment } from "../Middlewares/validateDepartment.js";
import {
  addWork,
  departmentDashboardController,
  myWorks,
  searchSimilarWork,
  sendSimilarData,
} from "../Controllers/departmentControllers.js";

const router = express.Router();

router.post(
  "/department/dashboard",
  validateDepartment,
  departmentDashboardController
);

router.post("/department/addWorks", validateDepartment, addWork);
router.post("/department/myWorks", validateDepartment, myWorks);
router.post("/department/getSimilarWorks",searchSimilarWork,sendSimilarData)

export default router;
