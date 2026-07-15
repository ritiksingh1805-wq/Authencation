import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import ratelimit from "express-rate-limit";
import  router from "./routes/authRoutes.js";

export const app=express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());


app.use("/api",router);


