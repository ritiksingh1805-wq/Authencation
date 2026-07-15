import { User } from "../models/auth.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config_Env } from "../config/config_Env.js";



export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "user already exisits",
                data: user,
            });
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        const newuser = await User.create({
            username,
            email,
            password: hashedpassword,
        })
        return res.status(201).json({
            success: true,
            message: "user register successfully"
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "somenthing went wrong",
        })
    }
}



export const login = async (req, res) => {
    try {
         
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "user are not created first create user",
            })
        }
        console.log("Request password:", password);
console.log("Database user:", user);
console.log("Database password:", user.password);
        const ismatch = await bcrypt.compare(password, user.password);
        if (!ismatch) {
            return res.status(400).json({
                success: false,
                message: "password are invalid",
            })
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return res.status(200).json({
            success: true,
            message: "Login successful.",
            token,
        });
    } catch (error) {
        console.log("LOGIN ERROR:", error); 
        return res.status(400).json({
            success: false,
            message: "somenthing went wrong",
        })
    }
}
