import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import ratelimit from "express-rate-limit";
import { userrouter } from "./routes/authroutes.js";


export const app=express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());


app.use("/api", userrouter);



