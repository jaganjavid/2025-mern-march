import React, { useState } from 'react'
import { Routes, Route } from "react-router";
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from './components/FeedbackStats';
import About from "./pages/About";
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';

const App = () => {


  const [feedback, setFeedback] = useState([
    {
        id:1,
        text:"This is a sample 1"
    },
    {
        id:2,
        text:"This is a sample 2"
    },
    {
        id:3,
        text:"This is a sample 3"
    },
  ]);
  
  return (
   <>
     <Header/>

     <div className='container'>
      <Routes>
      <Route index path='/' element={
        <>
        <FeedbackForm/>
        <FeedbackStats/>
        <FeedbackList/>
        </>
      }/>

      <Route path='/about' element={
        <About/>
      }/>

      <Route path='/blog' element={
        <Blog/>
      }/>
      
      <Route path='*' element={
        <NotFound/>
      }/>
       </Routes>
       
     </div>
     
   </>
  )
}


export default App