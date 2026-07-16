import dotenv from "dotenv";
dotenv.config();

export const config_Env= {
    PORT: process.env.PORT || 5000,
    MONGO_URI:process.env.MONGO_URI,
    JWT_SECRET:process.env.JWT_SECRET,
    BCRYPT_SALT_ROUND:Number(process.env.BCRYPT_SALT_ROUND) || 10,
    
    /* email env variables*/
    SMTP_PASS:process.env.SMTP_PASS,
    SMTP_HOST:process.env.SMTP_HOST || "smtp.gmail.com",
    SMTP_PORT:process.env.SMTP_PORT || 587,
    SMTP_USER:process.env.SMTP_USER,
    EMAIL_APP:process.env.EMAIL_APP || "Authencation app",
}