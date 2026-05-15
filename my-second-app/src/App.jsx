import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/Header'
import Footer from './components/Footer'
import{Routes ,Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import './App.css'
import Contact from './pages/Contact'


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about"  element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
