import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header'
function App() {

  return (
    <div>
    <h1>This is Third Project</h1>
    <Header></Header>
    <TestComponent text="My name is Vishal" age={22}></TestComponent>
    <ConditionalRen></ConditionalRen>
    <Decreace></Decreace>
    </div>
  );
}

function TestComponent(props){
  console.log(props);
  return <div>
    <h2>{props.text}</h2>
    <h2>{props.age}</h2>
  </div>

}

function ConditionalRen(){
  let logedin=false;
  let isVisible=true;
  return(
    <div>
      {logedin ? <p>Welcome Back</p> : <p>Login to continue</p>}
      {isVisible && <div>this is div</div>}
    </div>
  )
}

function Decreace(){
  let [num, setNum]=useState(0);

  function decrease(){
    setNum(num-1);
  }
  function reset(){
    setNum(num=0);
  }
  return(
    <div>
      <h1>Num is {num}</h1>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
export default App
