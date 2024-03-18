import { Router } from "express";
import passport from "passport";
import { Login, register, logout } from "../controller/user.controller.js";

const router = Router();

router.post("/login", passport.authenticate("login","/login"), Login);


router.post("/register",passport.authenticate("register"),register);


router.get("/logout",logout);


export default router;