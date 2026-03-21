import { useState } from 'react'
import './App.css'
import VisibilityFun from './VisibilityFun';
import SelectTab from './SelectTab';
import Produts from'./Products'

function App() {
  let [num, setNum] =useState(0);
  function increaseNum(){
    let newNum = num+1;
    setNum(newNum);
  }
  return (
    <div>
      
      <h1>Value of Num is {num}</h1>
      <button onClick={increaseNum}>Clicke Me</button>
      <VisibilityFun></VisibilityFun>
      <SelectTab></SelectTab>
      <Produts></Produts>
    </div>
  )
}

export default App
