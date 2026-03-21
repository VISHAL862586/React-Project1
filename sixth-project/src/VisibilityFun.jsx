import { useState } from 'react'

function VisibilityFun(){
    let [isVisible, setVisibility] = useState(false);

    function toggleVisibility(){
        setVisibility(!isVisible);
    }

    return(
        <div>
            <button onClick={toggleVisibility}>Click me</button>
            {isVisible && <p>This Is Para</p>}
        </div>
    )
}

export default VisibilityFun;