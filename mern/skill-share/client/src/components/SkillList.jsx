import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function SkillList() {
  const [skills, setSkills] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");

  const fetchSkills = async () => {
    try {
      const res = await axios.get("/skills");
      setSkills(res.data);
    } catch (error) {
      console.error("Failed to fetch skills", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/skills/${id}`);
      setSkills(skills.filter(skill => skill._id !== id));
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const handleEdit = (skill) => {
    setEditId(skill._id);
    setEditName(skill.name);
    setEditDesc(skill.description);
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`/skills/${editId}`, {
        name: editName,
        description: editDesc
      });

      setSkills(skills.map(skill => skill._id === editId ? res.data : skill));
      setEditId(null);
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, [skills]);

  return (
    <div className="mt-8 space-y-4">
      {skills.map((skill) => (
        <div key={skill._id} className="bg-gray-100 p-4 rounded shadow">
          {editId === skill._id ? (
            <div className="space-y-2">
              <input
                className="w-full border px-2 py-1"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <textarea
                className="w-full border px-2 py-1"
                value={editDesc}
                onChange={(e) => setEditDesc(e.target.value)}
              />
              <div className="flex gap-2">
                <button
                  onClick={handleUpdate}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditId(null)}
                  className="bg-gray-500 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">{skill.name}</h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(skill)}
                  className="text-blue-600 font-semibold"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(skill._id)}
                  className="text-red-600 font-semibold"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
