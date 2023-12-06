import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import History from './pages/History'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
     <History />
    </>
  )
}

export default App
