import React, {useState} from "react";
import "./Piece.css"
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
    let activeImage = null;
    const images = [bomb, captain, colonel, flag, general, lieutenant, major, marshal, miner, scout, sergeant, spy];
    const imageTexts = ["bomb", "captain", "colonel", "flag", "general", "lieutenant", "major", "marshal", "miner", "scout", "sergeant", "spy"];
    const imagePairs = []
    let counter = 0
    function createPairs(imageValue, imageText, array){
        array.push({image: imageValue,desc: imageText});

    }
    images.forEach(element => {
        createPairs(element, imageTexts[counter], imagePairs)
        counter = counter + 1
    });

    imagePairs.forEach(element => {
        console.log(type)
        console.log(element.desc)
        if(type == element.desc){
            activeImage = element.image
        } 
    });
    

    return(
        <img className="piece-image" src={activeImage}></img>
        
        )

}
export default Piece;


