import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    name:{type: String, required:true},
    description:{type:String},
    createdAt: {type:Date, default:Date.now}
});


export default mongoose.model("Skill", skillSchema);