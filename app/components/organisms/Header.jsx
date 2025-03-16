import React from "react";
import Logo from "../atoms/Logo";
import NavMenu from "../molecules/NavMenu";
import ActionButton from "../molecules/HeaderButton";
import "../styles/Header.css";

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <NavMenu />
            <ActionButton />
        </header>
    );
};

export default Header;
