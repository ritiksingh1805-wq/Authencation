import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import ratelimit from "express-rate-limit";


export const app=express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());



