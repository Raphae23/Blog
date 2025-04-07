import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config()
import articleRoutes  from "./routes/articleRoutes.js";

const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use(articleRoutes);

// MongoDB connection
mongoose.connect(MONGO_URL)
.then(()=>{
   app.listen(PORT, ()=>{console.log(`Server is listening to port ${PORT}`)})
   console.log("Connected to MongoDB successfully")
})
.catch((err)=>{
   console.log(err)
})
