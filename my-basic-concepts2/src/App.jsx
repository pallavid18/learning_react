import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoArrayLocalStorage from './components/TodoArrayLocalStorage'
import TodoCrud from './components/TodoCrud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to React</h1>
    <hr/>
    <TodoArrayLocalStorage/>
    <hr/>
    <TodoCrud/>
    </>
  )
}

export default App
