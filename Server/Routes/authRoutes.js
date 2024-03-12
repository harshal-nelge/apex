import express from "express";
import { loginAdmin, loginDepartment, registerAdmin, registerDepartment } from "../Controllers/authControllers.js";


const router = express.Router();

router.post("/department/register", registerDepartment);
router.post("/department/login", loginDepartment)

router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin)





export default router;