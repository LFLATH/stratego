import React from "react";
import  "./StartButton.css"



const StartButton = ({menufinished, menuFunction}) =>{
    const startButton = <button  className="button" onClick={() => menuFunction(menufinished = true)}>Start</button>


    return(
        <div>
            {menufinished === false ? startButton : null }
        </div>
    )

}
export default StartButton;

