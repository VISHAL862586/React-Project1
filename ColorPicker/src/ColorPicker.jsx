import {useState} from 'react'

function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF");

    function ColorChanger (e){
        setColor(e.target.value)
    }

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor:color}}>
                <p>Selected Color : {color}</p>
            </div>
            <lable>
                Select Color
                <br/>
                <input type="color" value={color} onChange={ColorChanger}></input>
            </lable>
        </div>
    )

}

export default ColorPicker;