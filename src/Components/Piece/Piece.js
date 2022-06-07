import React, {useState} from "react";
import  "./Piece.css"



const Piece = ({positionrow, positioncol}) =>{
    const [type, setType] = useState()
    const [power, setPower] = useState()
    const [isAlive, setMortality] = useState(true)
    const [locked, setLock] = useState(false)
    const [hidden, setHidden] = useState(true)
    
    console.log("Row " + positionrow)
    console.log("Col" + positioncol)
    console.log(playable)

    return(
        <div className={playable ? "Land" : "Lake"}>
        </div>            
    )

}
export default Piece;

