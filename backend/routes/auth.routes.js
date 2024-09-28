import exppress from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = exppress.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;