import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componets/Header/Header'
import Shop from './componets/Shop/Shop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
    <Shop></Shop>
    </div>
  )
}

export default App
