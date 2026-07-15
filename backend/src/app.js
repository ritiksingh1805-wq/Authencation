import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import ratelimit from "express-rate-limit";
import  router from "./routes/authRoutes.js";
import ratelimit, { rateLimit } from "express-rate-limit";
import { userrouter } from "./routes/authroutes.js";


export const app=express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());


app.use("/api",router);



const limiter=ratelimit({
    windowMs: 10 * 60 * 1000,
    max:2,
    message:{
        success:false,
        message:"too many attemtps try again later",
    }
})

app.use("/api",limiter, userrouter);
