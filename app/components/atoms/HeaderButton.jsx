import React from "react";
import "../styles/Header.css";

const HeaderButton = ({ label, onClick }) => {
    const buttonStyle = {
        backgroundColor: "#C13235",
        color: "white",
        padding: "16px 20px",
        fontWeight: 400,
        maxHeight: "60px",
        maxWidth: "330px",
        fontFamily: "'Source Sans 3', sans-serif",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "23px"
    };

    const hoverStyle = {
        ":hover": {
            backgroundColor: "#8c2828"
        }
    };

    return (
        <button
            className="button"
            onClick={onClick}
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = "#8c2828"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#C13235"}
        >
            {label}
        </button>
    );
};

export default HeaderButton;
