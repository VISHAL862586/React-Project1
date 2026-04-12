import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [width, setWidth]=useState(window.innerWidth);
  const [height, setHeight]=useState(window.innerHeight);

  useEffect(()=>{
    window.addEventListener("resize", handleResize);
    console.log("Event Listner added");
  }, []);

  useEffect(()=>{
    document.title=`Size : ${width} * ${height}`
  })

  function handleResize(){
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }

  return (
    <>
    <p>Window Width : {width}px</p>
    <p>Window Height : {height}px</p>
     
    </>
  );
}

export default App
