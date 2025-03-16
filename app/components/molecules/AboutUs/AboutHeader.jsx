import React from "react";
import "./AboutHeader.css";
import BlueEmpty3WhiteFilledRightFace from "../../atoms/Triangles/1BlueEmpty3WhiteFilledRightFace";

const AboutHeader = ({ title, description, imageUrl }) => {
    return (
        <section className="about-section">
            <div className="about-content">
                <div className="about-image">
                    <img src={imageUrl} alt="About Us" />
                </div>
                <BlueEmpty3WhiteFilledRightFace />
                <div className="about-text">
                    <h2 className="about-title">{title}</h2>
                    <p className="about-description">{description}</p>
                </div>
            </div>
        </section>
    );
};

export default AboutHeader;
