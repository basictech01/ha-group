import React from "react";
import "./PartnerSection.css";

const partnerLogos = [
    "/assets/images/partner1.PNG",
    "/assets/partner2.png",
    "/assets/partner3.png",
    "/assets/partner4.png",
    "/assets/partner5.png",
    "/assets/partner6.png",
    "/assets/partner7.png",
    "/assets/partner8.png",
];

const PartnerSection = () => {
    return (
        <section className="partner-section">
            <h2>
                Our <span className="highlight">Partner</span>
            </h2>
            <div className="partner-slider">
                <div className="partner-track track-left">
                    {partnerLogos.map((logo, index) => (
                        <img key={index} src={logo} alt={`Partner ${index + 1}`} />
                    ))}
                </div>
                <div className="partner-track track-right">
                    {partnerLogos.map((logo, index) => (
                        <img key={index} src={logo} alt={`Partner ${index + 1}`} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerSection;
