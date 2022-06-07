import React, {useState} from "react";
import  "./MenuWrapper.css"


const MenuWrapper =({children}) => {
    return(
        <div className="wrapper">
            {children}
        </div>
       

    )
}



export default MenuWrapper;