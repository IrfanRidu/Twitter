import express from "express"
import authRoutes from "./routes/auth.js"
import dotenv from "dotenv";
import connetToDb from "./db/connectToDb.js";

const app= express();
const PORT=process.env.PORT||5000
dotenv.config();

app.use("/api/auth", authRoutes)

app.listen(PORT,()=>{
    console.log(`server is Running on port ${PORT}`)
    connetToDb();
})