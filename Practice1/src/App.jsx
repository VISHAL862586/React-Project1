import { useState } from 'react'
import './App.css'
import UpdateNum from './UpdateNum'

function App() {
  let  [items, setitems]=useState([]);

  async function getproduct(){
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setitems(data.products);
    console.log(data.products);
  }

  return (
    <div>
      <button onClick={getproduct}>Add Product</button>
      <div className="container">
        {items.map((item)=>{
          return(
            <div className="imgSec" key={item.id}>
              <a href="#"><img src={item.thumbnail}></img></a>
              <p>{item.title}</p>
              <p>Rs.{item.price}</p>
            </div>
          )
        }) 

        }
      </div>
      <UpdateNum></UpdateNum>
    </div>

  )
}

export default App
