import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = (): React.ReactElement => {
    const links = [
        {name: "References", link: "/references"}
    ]

    const renderedLinks = links.map(item => (
        <>
            <Link to={item.link}>{item.name}</Link> |
        </>
    ))
    return (
        <div style={{background: "lightgrey", padding: 8}}>
            {renderedLinks}
        </div>
    )
}