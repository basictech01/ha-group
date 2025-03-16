import React from "react";
import "./HeroSection.css";
const HeroSection = () => {
    return (
        <section className="hero">
            <img
                src="/assets/images/heroImage.avif"
                alt="Hero background"
                className="hero-image"
            />
            <div className="hero-content">
                <h1>
                    HAGroup <span className="bold-text">Transforming <br />
                        Visions into</span> Ventures
                </h1>
                <div className="hero-buttons">
                    <button className="primary-button">Get started</button>
                    <button className="secondary-button">Connect over a call</button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
