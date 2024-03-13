import express from "express";

import { validateAdmin } from "../Middlewares/validateAdmin.js";
import { adminDashboardController } from "../Controllers/adminControllers.js";

const router = express.Router();

router.post("/admin/dashboard", validateAdmin, adminDashboardController);

export default router;
