import mongoose from "mongoose";
import { config_Env } from "./config_Env.js";

export const connectDB=async()=>{
    try{
        await mongoose.connect(config_Env.MONGO_URI);
        console.log("MongoDB Connected Successfully");
        
    }catch(error){
        console.log("Somenthing went Wrong",error.message);
        process.exit(1);
    }
}