
import express from "express";
import Skill from "../model/Skill.js";


const router = express.Router();

// Get all skills

router.get("/", async(req, res) => {
    const skills = await Skill.find({});
    res.json(skills);
});

// Get post skills

router.post("/", async(req, res) => {

    const {name, description} = req.body;

    const newSkill = new Skill({name, description});

    await newSkill.save();

    res.status(201).json(newSkill);
});

// Delete a skill

router.delete("/:id", async(req, res) => {

    await Skill.findByIdAndDelete(req.params.id);

    res.json({message:"Skill deleted"});
})


export default router;
