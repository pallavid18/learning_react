import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import{Routes ,Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about"  element={<About/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
