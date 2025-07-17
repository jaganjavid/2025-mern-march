import { useState } from "react";
import axios from "../api/axios";

export default function SkillForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return;

    try {
      const res = await axios.post("/skills", { name, description });
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
