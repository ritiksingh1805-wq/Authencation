import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required:[true,"username is required"],
        minlength:[3,"username must be 3 characters"],
        maxlength:[12,"username cannot execeed 12 characters"],
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        trim:true,
        lowercase:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"please enter valid email"],
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minlength:[8,"password must be atleast 8 character"],
        select:false,
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    verifyOtp:{
        type:Number,
        default:"",
        select:false,
    },
    verifyOtpExpireAt:{
        type:String,
        default:null,
        select:false,
    },
    refreshToken:{
        type:String,
        default:null,
        select:false,
    },
    resetOtp:{
        type:String,
        default:"",
        select:false,
    },
    resetOtpExpireAt:{
        type:String,
        default:null,
        select:false,
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user",
    },
    lastLoginAt:{
        type:Date,
        default:null,
    },
},
        {
            timestamps:true,
        }
            );
export const User=mongoose.model("User",userSchema);

