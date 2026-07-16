import { config_Env } from "./config_Env.js";
import nodemailer from "nodemailer";

export const mailTransporter=nodemailer.createTransport({
    host:config_Env.SMTP_HOST,
    port:config_Env.SMTP_PORT,
    secure:false,
    auth :{
        user:config_Env.SMTP_USER,
        pass:config_Env.SMTP_PASS,
    }
});