import { useEffect, useState } from "react";
import { useSkills } from "../context/SkillContext";
import { fetchSkills } from "../redux/skillsSlice";
import { useSelector, useDispatch } from "react-redux"

export default function SkillList() {
  
  // const { skills, deleteSkill, updateSkill,setEditSkill} = useSkills();

  const dispatch = useDispatch();
  const { skills } = useSelector((state) => state.skills);

  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editDesc, setEditDesc] = useState("");

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  console.log(skills);

  // const handleEdit = (skill) => {
  //   setEditId(skill._id);
  //   setEditName(skill.name);
  //   setEditDesc(skill.description);
  // }

  // const handleUpdate = async () => {
  //   await updateSkill(editId, {name:editName, description:editDesc});
  //   setEditId(null);
  //   setEditName("");
  //   setEditDesc("");
  // }


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
                  className="bg-green-600 text-white px-3 py-1 rounded"
                  onClick={handleUpdate}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 text-white px-3 py-1 rounded"
                  onClick={() => setEditId(null)}
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
                  className="text-blue-600 font-semibold"
                  onClick={() => console.log("Edit")}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 font-semibold"
                  onClick={() => console.log("Delete")}
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
