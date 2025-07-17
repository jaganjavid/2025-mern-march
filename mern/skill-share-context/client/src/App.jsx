import SkillForm from "./components/SkillForm";
import SkillList from "./components/SkillList";
import SkillsStat from "./components/SkillsStat";

const App = () => {
  return (
    <div className="max-w-xl mx-auto p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
        SkillShare Board
      </h1>
      <SkillsStat/>
      <SkillForm/>
      <SkillList />
    </div>
  )
}

export default App