
import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";

const SkillContext = createContext();

export const useSkills = () => useContext(SkillContext);

export const SkillProvider = ({ children }) => {

    const [skills, setSkills] = useState([]);

    const [editSkill, setEditSkill] = useState({
        edit:false
    })

    const fetchSkills = async () => {
       try{

        const res = await axios.get("/skills");
        setSkills(res.data);
       }catch(err){
         console.log("Error fetching skills");
       }
    }

    const addSkills = async(newSkillData) => {
        const res = await axios.post("/skills", newSkillData);
        
        setSkills((prev) => [res.data, ...prev]);
    }

    const deleteSkill = async (id) => {
        await axios.delete(`/skills/${id}`);
        setSkills((prev) => prev.filter((s) => s._id !== id))
    }
    
    const updateSkill = async (id, updatedData) => {
        const res = await axios.put(`/skills/${id}`, updatedData);
        setSkills((prev) => 
            prev.map((s) => (s._id === id ? res.data : s))
        )
        setEditSkill((prev) => !prev);
    }
    
    

    useEffect(() => {
        fetchSkills();

        console.log("Hello");
    }, [editSkill]);

   

    return (
        <SkillContext.Provider value={{
            skills,
            addSkills,
            deleteSkill,
            updateSkill,
            setEditSkill
        }}>
            {children}
        </SkillContext.Provider>
    )

}