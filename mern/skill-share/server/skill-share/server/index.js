
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import skillRoutes from "./routes/skills.js";

dotenv.config();


const app = express();
const port = process.env.PORT;

app.use(cors({origin:"http://localhost:5173"}))
app.use(express.json());

app.get("/", (req, res) => {
   res.status(200).send("Hello Node - Text Response 1");
})

app.use("/api/skills",skillRoutes)


mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(port, () => {
        console.log(`DB connect and Server running on ports ${port}`);
    })
})
.catch((err) => console.log("DB connection failed:" , err));




