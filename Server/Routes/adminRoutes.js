import express from "express";
import { validateDepartment } from "../Middlewares/validateDepartment";
import { departmentDashboardController } from "../Controllers/departmentControllers";
import { validateAdmin } from "../Middlewares/validateAdmin";
import { adminDashboardController } from "../Controllers/adminControllers";

const router = express.Router();

router.post("/admin/dashboard", validateAdmin, adminDashboardController);

export default router;
