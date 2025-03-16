import React from "react";
import "../styles/Header.css";

const NavLink = ({ label, href }) => {
    return (
        <a href={href} className="nav-link">
            {label}
        </a>
    );
};

export default NavLink;
