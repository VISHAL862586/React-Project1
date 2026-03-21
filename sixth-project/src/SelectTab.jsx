import { useState } from 'react'

function SelectTab(){
    let [tab, setTab ]=useState("for_you");

    function toggleFassion(){
        setTab("Fassion")
    }

     function toggleForYou(){
        setTab("For_you")
    }

    return(
        <div>
            <button onClick={toggleForYou}>for You</button>
            <button onClick={toggleFassion}>Fassion</button>

            {tab=="For_you" && <div>For You Contetnt</div>}
            {tab=="Fassion" && <div>Fasssion Contetnt</div>}
        </div>
    )
}

export default SelectTab;