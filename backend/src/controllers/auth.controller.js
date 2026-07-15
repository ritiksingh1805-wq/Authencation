import {ApiResponse} from "../utils/Apiresponse.js";

export const registetController=asyncHandler(async(req,res)=>{
		const result=await registerService(req.body);
		return res.statusCode(201)
		.json(new Apiresponse(201,"User Register Successfully",result);
	})
