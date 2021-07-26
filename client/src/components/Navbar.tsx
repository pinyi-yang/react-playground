import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = (): React.ReactElement => {
    const links = [
        {name: "References", link: "/references"}
    ]

    const renderedLinks = links.map(item => (
        <div key={item.name}>
            <Link to={item.link} >{item.name}</Link> |
        </div>
    ))
    return (
        <div style={{background: "lightgrey", padding: 8}}>
            {renderedLinks}
        </div>
    )
}