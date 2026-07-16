import bcrypt from "bcrypt";
import { config_Env } from "../config/config_Env";

export const generateOtp=()=>{
    return Math.floor(100000+Math.random()*900000);
}

export const hashOtp=async(otp)=>{
    const saltRounds= Number(config_Env.BCRYPT_SALT_ROUND) || 10;
    return await bcrypt.hash(otp,saltRounds);
}