import { User } from "../models/auth.model.js";
import { ApiError } from "../utils/Apierror.js";
import { config_Env } from "../config/config_Env.js";
import bcrypt from "bcrypt";
import { hashOtp,generateOtp } from "../utils/otp.js";


export const registerService =async ({ username, email, password }) => {

    const usernametrim = username.trim();
    const emailtrim = email.trim().toLowerCase();

    if(!usernametrim || !emailtrim || !password){
        throw new ApiError(400,"username and email are required");
    }

    if (usernametrim.length < 4 || usernametrim.length > 8) {
        throw new ApiError(400, "username must be between 4 to 8 characters and numbers");
    }

    if(password.length<8){
        throw new ApiError(400,"password must be atleast  8 characters");
    }

    const saltRounds=Number(config_Env.BCRYPT_SALT_ROUND) || 10;
    const hashedPassword=await bcrypt.hash(password,saltRounds); 

    const verifyOtp=generateOtp();
    const verifyOtpExpireAt=new Date(Date.now()+10*60*1000);
    const hashedOtp= await hashOtp(verifyOtp);

    const user=await User.create({
        username,
        email,
        password:hashedPassword,
        isVerified:false,
        verifyOtp:hashedOtp,
        verifyOtpExpireAt,
        data,
    })

    await sendEmail

}