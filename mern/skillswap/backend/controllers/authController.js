import User from "../models/User.js";

export const registerUser = async(req, res) => {
    const {name, email, password} = req.body;

    console.log(name, email, password);

    res.status(200).json({
        name,
        email,
        password
    })
}

