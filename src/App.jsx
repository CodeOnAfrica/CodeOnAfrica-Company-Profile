import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/Home'
import Team from './components/Team'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'




const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' index element={<Home/>}/>
        <Route path='/team' index element={<Team/>}/>
        <Route path='/services' index element={<Services/>}/>
        <Route path='/team'  element={<Team/>}/>
        <Route path ='/about' element ={<About />} />

       
      </Route>
    </Routes>
    </BrowserRouter>
   
    
    </>
    
    
  )
}

export default App