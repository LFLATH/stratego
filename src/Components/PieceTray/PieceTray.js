import React from "react";
import  "./PieceTray.css"



const PieceTray = ({piecelist}) =>{ 
    return(
        <div className="piecetray">
            <h1 className="pieces">{piecelist}</h1>
        </div>
    )

}
export default PieceTray;

