import React, {useState} from "react";
import bomb from "./Assets/bomb.png";
import captain from "./Assets/captain.png";
import colonel from "./Assets/colonel.png";
import flag from "./Assets/flag.png";
import general from "./Assets/general.png";
import lieutenant from "./Assets/lieutenant.png";
import major from "./Assets/major.png";
import marshal from "./Assets/marshal.png";
import miner from "./Assets/miner.png";
import scout from "./Assets/scout.png";
import sergeant from "./Assets/sergeant.png";
import spy from "./Assets/spy.png";
const Piece = ({positionrow, positioncol, color, type}) =>{
    const [isAlive, setMortality] = useState(true)
    let acitveImage = null;
    const images = [bomb, captain, colonel, flag, general, lieutenant, major, marshal, miner, scout, sergeant, spy];
    console.log(String(bomb))
    images.forEach(element => {
        if(type === String(element)){
            acitveImage = element
        } 
    });
    console.log(typeof(acitveImage))
    return(
            <img className="piece" src={acitveImage}/> 
    )

}
export default Piece;


