import {useState} from 'react';

function Food(){
    const [fruits, setFruits] = useState(["Apple", "Orange", "Mango"]);

    function AddFruit(){
        const newFruit = document.getElementById("fruitinput").value;
        document.getElementById("fruitinput").value = "";
        setFruits([...fruits, newFruit]);
    }

    return(
        <div>
            <h2>List of Fruits</h2>
            <ul>
                {fruits.map((fruit, index)=> <li key={index}>{fruit}</li>)}
            </ul>
            <input type="text" id="fruitinput"></input>
            <button onClick={AddFruit}> Add Fruit</button>
        </div>
    )

}

export default Food;