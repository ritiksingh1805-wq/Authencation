import express from "express";
export const router=express.Router();

import {register,login} from "../controllers/auth.controller.js";


router.post("/login",login);
router.post("/register",register);
