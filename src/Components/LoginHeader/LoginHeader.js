import React from "react";
import  "./LoginHeader.css"



const LoginHeader = ({menufinished}) =>{

    return(
        <div>
            {menufinished === false ? <h1 className="test">Stratego</h1>: null}
            
        </div>
    )

}
export default LoginHeader;

