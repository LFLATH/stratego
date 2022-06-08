import React, {useState} from "react";
import PieceTray from "../PieceTray/PieceTray";
import  "./GameWrapper.css"


const GameWrapper =({children}) => {
    const isRed = true // need to implement backend logic to use this. Placeholdeer for now
    const piecelist = ["bomb", "captain", "colonel", "flag", "general", "lieutenant", "major", "marshal", "miner", "scout", "sergeant", "spy"];
    return(
        <div className="gamewrapper">
            {children}
            <PieceTray piecelist={piecelist} isRed={isRed}/>
        </div>
       

    )
}



export default GameWrapper;