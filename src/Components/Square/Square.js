import React from "react";
import  "./Square.css"



const Square = ({positionrow, positioncol, playable}) =>{
    console.log("Row " + positionrow)
    console.log("Col" + positioncol)
    console.log(playable)

    return(
        <div className={playable ? "Land" : "Lake"}>
        </div>            
    )

}
export default Square;

