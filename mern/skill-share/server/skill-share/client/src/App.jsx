import SkillForm from "./components/SkillForm";
import SkillList from "./components/SkillList";

const App = () => {
  return (
    <div className="max-w-xl mx-auto p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
        SkillShare Board
      </h1>
      <SkillForm/>
      <SkillList />
    </div>
  )
}

export default App