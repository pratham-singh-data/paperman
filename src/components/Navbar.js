import React from "react";

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
    return(
        <div>
            <ul>
                {
                    links.map(item => {
                        return (
                            <li key={item.key}>
                                <a href={item.to}>{item.text}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Navbar;