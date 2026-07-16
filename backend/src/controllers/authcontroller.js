import { register } from "../services/register.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/Apiresponse.js";

export const registerController = asyncHandler(async (req, res) => {
        const result = await registerService(req.body);
        return res.status(201)
                .json(new ApiResponse(201, "User Register Successfully", result));
})