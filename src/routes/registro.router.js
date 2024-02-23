import { Router}  from "express";
import { registerForm } from "../controller/registro.controller.js";
const router = Router()

router.post("/Registro", registerForm)



export default router