import React, {useState} from "react";
import bomb from "/Assets";


const Piece = ({positionrow, positioncol, color, type}) =>{
    const [isAlive, setMortality] = useState(true)
    return(
            <img className="piece" src={type}/>           
    )

}
export default Piece;

