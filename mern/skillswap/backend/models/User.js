import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
    avatarUrl:{
        type:String,
        default:"",
    },
    role:{
        type:String,
        enum:["user", "admin"],
        default:"user"
    },
    favorites:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Skill"
        }
    ]

}, {timestamps:true});

export default mongoose.model("User", userSchema);