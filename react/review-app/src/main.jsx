import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FeedbackProvider } from './context/FeedbackContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')).render(
    <FeedbackProvider>
    <ThemeProvider>
      <BrowserRouter>
         <App /> 
       </BrowserRouter>  
    </ThemeProvider>
    </FeedbackProvider>
 
)
