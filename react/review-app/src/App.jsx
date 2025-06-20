import React from 'react'
import Header from './components/Header'
import { AllRoutes } from './routes/AllRoutes'
import Footer from './components/Footer'

const App = () => {
  return (
  <>
    <Header/>
    <AllRoutes/>
    <Footer/>
  </>
  )
}

export default App