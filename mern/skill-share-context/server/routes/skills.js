
import express from "express";
import Skill from "../model/Skill.js";


const router = express.Router();

// Get all skills

router.get("/", async(req, res) => {
    const skills = await Skill.find().sort({ createdAt: -1 });
    res.json(skills);
});

// Get post skills

router.post("/", async(req, res) => {

    const {name, description} = req.body;

    const newSkill = new Skill({name, description});

    await newSkill.save();

    res.status(201).json(newSkill);
});

// Update a skill
router.put('/:id', async (req, res) => {
    const { name, description } = req.body;
  
    try {
      const updatedSkill = await Skill.findByIdAndUpdate(
        req.params.id,
        { name, description }
      );
      res.json(updatedSkill);
    } catch (err) {
      res.status(500).json({ message: 'Error updating skill', error: err });
    }
  });

// Delete a skill

router.delete("/:id", async(req, res) => {

    await Skill.findByIdAndDelete(req.params.id);

    res.json({message:"Skill deleted"});
})


export default router;
