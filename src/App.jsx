
import React, { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './components/Home'
import Team from './components/Team'
import About from './components/About'
import Services from './components/Services'
import Blog from './components/Blog'
import Contact from './components/Contact'
import FAQComponent from './components/FAQ'
import TermsCondition from './components/TermsCondition'
import Portfolio from './components/Portfolio'
import CaseStudies from './components/CaseStudies'
import Quotations from './components/Quotations'
import Resources from './components/Resources'
import NotFound from './components/NotFound'




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
        <Route path ='/blog' element ={<Blog />} />
        <Route path ='/contact' element ={<Contact />} />
        <Route path ='/faq' element ={<FAQComponent />} />
        <Route path='/terms-conditions' element={<TermsCondition/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/case-studies' element={<CaseStudies/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/quotation' element={<Quotations/>}/>
        <Route path='*' element={<NotFound/>}/>

       
      </Route>
    </Routes>
    </BrowserRouter>
  
    
    </>
    
    
  )
}

export default App