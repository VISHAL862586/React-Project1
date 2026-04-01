import { useState } from 'react'
import './App.css'

function App() {

  const [name , setName] = useState("Vishal");
  const [quentity, setQuentity] = useState(1);
  const [comment, setComment] = useState("Hello Friend");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState();

  const UpdateName = (e)=>{
    setName(e.target.value)
  }

  const UpdateQuentity = (e)=>{
    setQuentity(e.target.value)
  }

  const UpdateCommnet = (e)=>{
    setComment(e.target.value);
  }

  const ChangePaymentMode =(e)=>{
    setPayment(e.target.value);
  }

  const CheckShipping =(e)=>{
    setShipping(e.target.value);
  }

  return(
    <div>
      <input value={name} onChange={UpdateName}></input>
      <p>Name : {name}</p><br></br>

      <input value={quentity} onChange={UpdateQuentity} type="number"></input>
      <p>Quenty : {quentity}</p><br></br>

      <textarea value={comment} onChange={UpdateCommnet}></textarea>
      <p>Comment : {comment}</p><br></br>

      <select value={payment} onChange={ChangePaymentMode}>
        <option value="">Select Option</option>
        <option value="Visa">Visa</option>
        <option value="Credit-Card">Credit-Card</option>
        <option value="Gift-Card">Gift-Card</option>
      </select>
      <p>Payment : {payment}</p>
      <br></br>

      <label>
        <input type="radio" value="Pick Up" checked={shipping==="Pick Up"}
                onChange={CheckShipping}></input>
        Pick Up
      </label>
      <label>
        <input type="radio" value="Delivery" checked={shipping==="Delivery"}
                onChange={CheckShipping}></input>       
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
      
    </div>
  )
}

export default App
