import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../services/firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); // ✅ correct usage

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {

    const unsub = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    return unsub;

  }, []);

  const loginwithGoogle = async () => {
    
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider);

  };

  const loginWithEmail = (email, password) => {

    signInWithEmailAndPassword(auth, email, password);

  }

  const registerWithEmail = async (email, password, name) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(res.user, {displayName:name})
    setUser(res.user);
  };

  const logout = () => signOut(auth);

 

  return (
    <AuthContext.Provider value={{ 
    user, 
    registerWithEmail, 
    loginwithGoogle, 
    loginWithEmail,
    logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};
