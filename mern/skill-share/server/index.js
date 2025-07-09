
import express from "express";
import dotenv from "dotenv";

// dotenv.config();


const app = express();
const port = 3000;

// app.use(express.json());

app.get("/", (req, res) => {
   res.status(200).send("Hello Node - Text Response");
})

app.get("/hello", (req, res) => {
    res.status(200).json({
        msg:"Hello im a json"
    })
})


app.listen(port, () => {
    console.log(`Server running on ports ${port}`);
})

