import React from "react";

const SocialIcon = ({ icon, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="social-icon">
            <img src={icon} alt="social-icon" />
        </a>
    );
};

export default SocialIcon;
