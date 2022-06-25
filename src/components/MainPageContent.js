import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";

const MainPageContent = ({children}) =>{
    return(
        <div>
            <Title/>
            <Navbar/>
            {children}
        </div>
    )
}

export default MainPageContent;