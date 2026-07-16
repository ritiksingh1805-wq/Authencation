import { ApiError } from "../utils/Apierror.js";

export const errormiddleware=(err,req,res,next)=>{
    let statusCode=err.statusCode || 500;
    let message=err.message || "internal error";

    return res.status(statusCode).json({
        success:false,
        message,
    })
}