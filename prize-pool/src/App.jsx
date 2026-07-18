import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import BattelCard from './components/BattelCard'
import PrizePool from './components/PrizePool'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container-fluid bg-black'>
      <PrizePool/>
      <BattelCard/>
    </div>
    
    </>
  )
}

export default App
