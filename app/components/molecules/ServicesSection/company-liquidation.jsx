import React from 'react'
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import './services.css';
import BlueEmpty3WhiteFilledRightFace from "../../atoms/Triangles/1BlueEmpty3WhiteFilledRightFace";
import BlueEmpty3WhiteFilledLeftFace from "../../atoms/Triangles/1BlueEmpty3WhiteFilledLeftFace";

const services = [
    {
        title: "Company Liquidation",
        description:
            "Whether you're looking to establish your venture on the mainland, leverage the advantages of Freezones, or explore the benefits of an offshore jurisdiction, we have you covered.",
        image: "/assets/images/services/company-liquidation.png",
    },
    
];
const CompanyLiquidation = () => {
    return (
        <div>
            <Header/>
            <section className="services">
    <div className="container">
        {services.map((service, index) => {
            const words = service.title.split(" ");
            const lastWord = words.pop(); // Extract last word
            const firstPart = words.join(" "); // Remaining words

            return (
                <div key={index} className={`service-item ${index % 2 === 1 ? "image-left" : "text-left"}`}>
                    {/* Conditional Left Triangle */}
                    {index % 2 === 0 && (
                        <BlueEmpty3WhiteFilledLeftFace className="triangle triangle-left" />
                    )}

                    {/* Text Section */}
                    <div className="service-text">
                        <h2>
                            {firstPart} <span className="highlight">{lastWord}</span>
                        </h2>
                        <p>{service.description}</p>
                    </div>

                    {/* Image Section */}
                    <div className="service-image">
                        <img src={service.image} alt={service.title} loading="lazy" />
                    </div>

                    {/* Conditional Right Triangle */}
                    {index % 2 === 1 && (
                        <BlueEmpty3WhiteFilledRightFace className="triangle triangle-right" />
                    )}
                </div>
            );
        })}
    </div>
</section>

        <Footer/>
        </div>
    );
}

export default CompanyLiquidation