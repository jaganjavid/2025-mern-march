import { createContext, useState } from "react";

const ThemeContext = createContext();



export const ThemeContextProvider = ({children}) => {


  const [theme, setTheme] = useState("Test");

  return (
    <ThemeContext.Provider value={{
        theme
    }}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;