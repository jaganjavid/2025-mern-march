import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {

  const { user, logout } = useAuth();

  return (
   <nav className="bg-white shadow p-4 flex justify-around mb-6 items-center">
     <Link to="/" className="font-bold text-xl">Prompt Learn</Link>

     <div className="space-x-4 text-sm flex items-center">
        <Link to="/">Home</Link>
        {user && (
          <>
          <Link to="/playground">Playground</Link>
          <Link to="/library">Library</Link>
          <Link to="/profile">Profile</Link>
          <span className="text-gray-600">Hi, {user?.displayName}</span>
          <button className="text-red-500" onClick={logout}>Logout</button>
          </>
        )}

        {/* olny show if not logger in */}
        {!user && (
          <Link to="/login" className="bg-black text-white px-3 py-1 rounded">
          Login / Sing Up
          </Link>
        )}
     </div>
   </nav>
  )
}

export default Navbar