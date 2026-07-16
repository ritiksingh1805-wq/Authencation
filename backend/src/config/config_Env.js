import dotenv from "dotenv";
dotenv.config();

export const config_Env= {
    PORT: process.env.PORT || 5000,
    MONGO_URI:process.env.MONGO_URI,
    JWT_SECRET:process.env.JWT_SECRET,
    BCRYPT_SALT_ROUND:process.env.BCRYPT_SALT_ROUND,
    EMAIL_PASSWORD:process.env.EMAIL_PASSWORD,
}