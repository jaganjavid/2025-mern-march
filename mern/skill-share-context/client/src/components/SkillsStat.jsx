import { useSkills } from "../context/SkillContext";

const SkillsStat = () => {

  const { skills } = useSkills();
  return (
    <h1>{skills.length}</h1>
  )
}

export default SkillsStat