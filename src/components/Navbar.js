import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const links = [
    {to: "/", text:"Home", key: 1},
    {to: "/business", text:"Business", key: 2},
    {to: "/entertainment", text:"Entertainment", key: 3},
    {to: "/health", text:"Health", key: 4},
    {to: "/science", text:"Science", key: 5},
    {to: "/sports", text:"Sports", key: 6},
    {to: "/technology", text:"Technology", key: 7}
];

const Navbar = () =>{
    const [current, setCurrent] = useState(1)
    const location = useLocation();

    useEffect(() => {
        links.forEach((item) => {
            if(item.to === location.pathname){
                setCurrent(item.key);
            }
        })
    }, [location]);

    return(
        <div>
            <nav className="w-full text-center">
                {
                    links.map(item => {
                        return (
                            <span className={`mx-2 ${current === item.key ? "text-turquoise" : null}`} key={item.key}>
                                <a href={item.to}>{item.text}</a>
                            </span>
                        )
                    })
                }
            </nav>
        </div>
    )
}

export default Navbar;