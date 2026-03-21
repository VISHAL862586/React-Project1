import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [num, setNum]= useState(0);

  //SetNum(num+1)     ====>>>   Go to infinite loop

  return (
    <div>
      <p>Count is {num}</p>
    </div>
    
  )
}

export default App
