import React, {useState} from "react";
import  "./Board.css"
import Square from "../Square/Square";



const Board = () =>{
    
    
    
    function createPositions(rowValue, colValue,array){
        array.push({row: rowValue,col: colValue});

    }
    let positions = []

    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            createPositions(i,j,positions)
        }
    }

    function lakeRow(rowValue){
        if(rowValue === 4 || rowValue === 5){
            return true
        }
        return false
    }
    function lakeCol(colValue){
        if(colValue === 2 || colValue === 3 || colValue === 6 || colValue === 7){
            return true
        }
        return false
    }


    const Squares = positions.map((position) => 
    <Square positionrow={position.row}  positioncol={position.col} playable = {!(lakeRow(position.row) && lakeCol(position.col))} />


    
    );

  
    return(
        <div className="Board"> 
            {Squares}
        </div>
    )

}
export default Board;

