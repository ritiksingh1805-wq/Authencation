import { app } from "./src/app.js";
import { config_Env } from "./src/config/config_Env.js";
import { connectDB } from "./src/config/db.js";

const startserver=async()=>{
    try{   
        connectDB(); 
        app.listen(process.env.PORT,()=>{
            console.log(`server running on port http://localhost:${process.env.PORT}`);
        })

    }catch(error){
        console.log("Somenthing went Wrong",error.message);
        process.exit(1);
        }
}

startserver();