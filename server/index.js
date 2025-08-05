import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

const app = express();
app.use(cors({
        origin: process.env.ORIGIN,
        credentials: true
}));
app.use(express.json());

import documentRoutes from "./routes/document.routes.js";
app.use("/api/document", documentRoutes);

connectDB()
        .then(() => {
                app.listen(process.env.PORT, () => {
                        console.log(`Server is running on port ${process.env.PORT}`);
                });
        })
        .catch((err) => {
                console.log("error in mongoDB connection", err );
        });