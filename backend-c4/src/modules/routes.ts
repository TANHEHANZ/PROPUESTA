import { Router } from "express";
import LoginRouter from "./login/login.routes";
export const router = Router();
router.use("/login", LoginRouter);
export default router;
