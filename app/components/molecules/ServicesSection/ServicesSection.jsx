import React from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";

const services = [
    {
        title: "Business Setup",
        image: "/assets/images/home/business_setup.png",
        link: "/business-setup",
    },
    {
        title: "Visa Services",
        image: "/assets/images/home/visa_services.png",
        link: "/visa-services",
    },
    {
        title: "Bank Account",
        image: "/assets/images/home/bank_account.png",
        link: "/bank-account",
    },
    {
        title: "Company Liquidation",
        image: "/assets/images/home/company_liquidation.png",
        link: "/company-liquidation",
    },
];

const ServicesSection = () => {
    return (
        <section className="services-section">
            <h2>
                Main <span className="highlight">Services</span>
            </h2>
            <div className="services-container">
                {services.map((service, index) => {
                    // Split the title into words and insert a line break
                    const words = service.title.split(" ");
                    const formattedTitle = (
                        <>
                            {words[0]}<br />{words[1]}
                        </>
                    );

                    return (
                        <Link key={index} to={service.link} className="service-card">
                            <img src={service.image} alt={service.title} />
                            <div className="overlay"></div>
                            <p>{formattedTitle}</p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default ServicesSection;
