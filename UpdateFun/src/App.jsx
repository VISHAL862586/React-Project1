import { useState } from 'react'

function App() {
  const [car, setCar] = useState({ year:2024,
                                  make:"Toyota",
                                  model:"Fortuner"
  }
  );

  function handleYearChange(e){
    setCar( car=> ({...car, year:e.target.value}))
  }
   function handleMakeChange(e){
    setCar(car=>({...car, make:e.target.value}))
  }
   function handleModelChange(e){
    setCar(car => ({...car, model:e.target.value}))
  }


  return (
    <>
      <div>
        <p>Your Car Specification</p>
        <p>Year : {car.year}</p>
        <p>Made By : {car.make}</p>
        <p>Model : {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange}></input>
        <input type="text" value={car.make} onChange={handleMakeChange}></input>
        <input type="text" value={car.model} onChange={handleModelChange}></input>
      </div>
    </> 
  )
}

export default App
