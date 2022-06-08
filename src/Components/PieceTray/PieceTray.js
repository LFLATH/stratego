import React from "react";
import Piece from "../Piece/Piece";
import  "./PieceTray.css"



const PieceTray = ({piecelist, isRed}) =>{ 
    const bluepieces = piecelist.map((x) => 
        <Piece
        positionrow={0}
        positioncol={0}
        color={"blue"}
        type = {x}
        />
    );

    const redpieces = piecelist.map((x) => 
        <Piece
        positionrow={0}
        positioncol={0}
        color={"red"}
        type = {x}
        
        
        
        />
    );
    return(
        <div className="piecetray">
            {isRed === true ? redpieces : bluepieces}
        </div>
    )

}
export default PieceTray;

