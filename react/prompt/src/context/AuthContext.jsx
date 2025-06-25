import { Children, createContext, useContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from "firebase/auth";

const AuthContext = createContext();

// export const useAuth = useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{
            user
        }}>
          {children}
        </AuthContext.Provider>
    )

}