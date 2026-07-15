import express from "express";
import { register,login } from "../controllers/authcontroller.js";

export const userrouter=express.Router();

userrouter.post("/register",register);
userrouter.post("/login", login);