import { useState } from 'react'

function UpdateNum(){
    let [num, setNum] = useState([10, 20]);

    function NewArr(){
        let newArr = [...num, 30];
        setNum(newArr);
    }

    return(
        <div>
            <button onClick={NewArr}>Update Num</button>
            {num.map((n)=>{
                return <p>{n}</p>
            })}
        </div>
    )
}


export default UpdateNum;