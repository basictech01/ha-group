import React from "react";
import NavLink from "../atoms/NavLink";

const NavMenu = () => {
    const links = [
        { label: "Business", href: "#" },
        { label: "Services", href: "#" },
        { label: "Blog", href: "#" },
        { label: "About us", href: "/about" },
        { label: "Contact us", href: "/contact" },
    ];

    return (
        <nav className="nav-menu">
            {links.map((link, index) => (
                <NavLink key={index} {...link} />
            ))}
        </nav>
    );
};

export default NavMenu;
