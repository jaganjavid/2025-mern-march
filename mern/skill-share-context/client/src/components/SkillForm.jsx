import { useState } from "react";
import { useSkills } from "../context/SkillContext";
import { useDispatch } from "react-redux";
import { addSkill } from "../redux/skillsSlice";



export default function SkillForm() {



  // const { addSkills } = useSkills();

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return;

    try {
      await dispatch(addSkill({name, description}));
      setName("");
      setDescription("");
    } catch (error) {
      console.error("Error adding skill", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow-md">
      <input
        type="text"
        placeholder="Skill Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      ></textarea>
      <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
        Add Skill
      </button>
    </form>
  );
}
