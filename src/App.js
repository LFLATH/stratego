import React, {useState} from "react";
import  "./index.css"
import Board from "./Components/Board/Board";
import LoginHeader from "./Components/LoginHeader/LoginHeader";
import StartButton from "./Components/StartButton/StartButton";
import MenuWrapper from "./Components/MenuWrapper/MenuWrapper";
import GameWrapper from "./Components/GameWrapper/GameWrapper";

const App =() => {
    const [menufinished, changeMenu] = useState(false)
    return(
        <>
            <MenuWrapper>
                <LoginHeader menufinished={menufinished}/>
                <StartButton menufinished = {menufinished} menuFunction = {changeMenu} />
            </MenuWrapper>
            {menufinished === true ? 
            <GameWrapper>
                <Board/> 
            </GameWrapper>
            
            
            : 
            
            null}

        </>
       

    )
}



export default App;