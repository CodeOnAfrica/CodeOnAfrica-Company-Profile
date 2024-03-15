import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/Home'
import Team from './components/Team'
import About from './components/About'
import Services from './components/Services'
import Blog from './components/Blog'
import Contact from './components/Contact'
import FAQComponent from './components/FAQ'




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

       
      </Route>
    </Routes>
    </BrowserRouter>
   
    
    </>
    
    
  )
}

export default App