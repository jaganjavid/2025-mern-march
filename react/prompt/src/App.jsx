import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Library from './pages/Library'
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Playground from "./pages/Playground"

import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
       <Navbar/>
       <main className='px-4 py-6 max-w-5xl mx-auto'>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/playground' element={<Playground/>}/>
           <Route path='/library' element={<Library/>}/>
           <Route path='/profile' element={<Profile/>}/>
         </Routes>
       </main>
    </BrowserRouter>
 
  )
}

export default App