import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';


const Login = () => {

  const { registerWithEmail,loginwithGoogle,loginWithEmail } = useAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(isLogin){
      try{
        await loginWithEmail(email, password);
        navigate("/playground");
      }catch(err){
        console.log(err);
      }
    }else{
      await registerWithEmail(email, password, name);
    }

  }


  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-bold text-center">
        {isLogin ? "Login to Promt Learn" : "Register a new account"}
      </h2>

      <form className="space-y-3" onSubmit={handleSubmit}> 
         
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
        
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-black text-white py-2 rounded">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <button
        className="w-full bg-blue-600 text-white py-2 rounded"
        onClick={async () => {
          await loginwithGoogle();
          navigate("/playground");
        }}
      >
        Continue with Google
      </button>

      <p className="text-center text-sm text-gray-500">
        {isLogin ? "New here " : "Already have an account? "}
        {/* <button className="text-blue-600 underline" onClick={() => setIsLogin((prev) => !prev)}>
          {isLogin ? "Create account" : "Login"}
        </button> */}
        <button className="text-blue-600 underline" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Create account" : "Login"}
        </button>

      </p>
    </div>
  )
}

export default Login