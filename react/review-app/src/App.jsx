
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";








const App = () => {
 
  return (
    <>
      <Header/>
      <div className="container">
        
        <Routes>
          <Route path="/" element={
            <>
            <FeedbackForm/>
            <FeedbackList/>
            </>
          }/>

          <Route path="/about" element={<About/>}/>
         
        </Routes>
       
      </div>
    </>
  );
}

export default App;
