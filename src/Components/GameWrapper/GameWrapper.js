import React, {useState} from "react";
import PieceTray from "../PieceTray/PieceTray";
import  "./GameWrapper.css"


const GameWrapper =({children}) => {
    const piecelist = ["Spy", "Officer", "Bomb"]
    return(
        <div className="gamewrapper">
            {children}
            <PieceTray piecelist={piecelist}/>
        </div>
       

    )
}



export default GameWrapper;