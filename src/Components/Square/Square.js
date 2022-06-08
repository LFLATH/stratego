import React, { useState } from "react";
import  "./Square.css"



const Square = ({positionrow, positioncol, playable}) =>{
    console.log("Row " + positionrow)
    console.log("Col" + positioncol)
    console.log(playable)

    const [hasPiece, setLoad] = useState(false)
    const [pieceColoir, setColor] = useState()
    
    return(
        <div className={playable ? "Land" : "Lake"}>
        </div>            
    )

}
export default Square;

