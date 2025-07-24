import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Skill Swap API Running");
});

// const registerUser = async(req, res) => {
//     const {name, email, password} = req.body;

//     console.log(name, email, password);

//     res.status(200).json({
//         success:true
//     })
// }


// app.get("/api/auth", (req, res) => {
//     res.send("Skill Swap AUTH Route");
// });

// app.post("/api/auth/register", registerUser);

app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
})
.catch((err) => console.log(err));




