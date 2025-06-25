import { Link } from "react-router-dom";

const Navbar = () => {
  return (
   <nav className="bg-white shadow p-4 flex justify-around mb-6 items-center">
     <Link to="/" className="font-bold text-xl">Prompt Learn</Link>

     <div className="space-x-4 text-sm flex items-center">
        <Link to="/">Home</Link>
        <Link to="/playground">Playground</Link>
        <Link to="/library">Library</Link>
        <Link to="/profile">Profile</Link>

        <Link to="/login" className="bg-black text-white px-3 py-1 rounded">
         Login / Sing Up
        </Link>
        <button className="text-red-500">Logout</button>
     </div>
   </nav>
  )
}

export default Navbar