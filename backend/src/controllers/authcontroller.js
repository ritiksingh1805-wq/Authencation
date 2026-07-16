import { register } from "../services/register.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const registerController=asyncHandler(async(req,res)=>{
        const result=await registerService(req.body);
})