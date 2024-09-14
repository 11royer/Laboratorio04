import { useState } from "react";

export const Button = props => {

    const {text} = props 
    const[count, setCount] = useState(0)

    function handlerButon(){
        setCount(count + 5)
    }
    return(
        <button onClick = {handlerButon} >
            {text} {count}
        </button>
    )
}
