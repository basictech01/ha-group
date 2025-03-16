import React from "react";
import "./ValueAddedServices.css"; // Import CSS file

const vas1 = [
    {
        title: "Account and /Bookkeeping",
        image: "assets/images/home/accounting.png",
        link: "/accounting"
    },
    {
        title: "Branding and /Marketing",
        image: "assets/images/home/branding.png",
        link: "/branding"
    },
    {
        title: "Property /Conveyancing",
        image: "assets/images/home/property.png",
        link: "/property-conveyancing"
    },
    {
        title: "Power of /Attorney",
        image: "assets/images/home/attorney.png",
        link: "/power-of-attorney"
    },
];

const vas2 = [,
    {
        title: "Nominee /Director",
        image: "assets/images/home/director.png",
        link: "/nominee-director"
    },
    {
        title: "Mortgage /Financing",
        image: "assets/images/home/mortgage.png",
        link: "/mortgage-financing"
    },
    {
        title: "Insurance",
        image: "assets/images/home/insurance.png",
        link: "/insurance"
    },
    {
        title: "HR /Consultancy",
        image: "assets/images/home/hr.png",
        link: "/hr-consultancy"
    },
];

const ValueAddedServices = () => {
    return (
        <div className="container">
            {/* Heading */}
            <h2 className="heading">
                Value Added <span className="highlight">Services</span>
            </h2>

            {/* Services Grid */}
            <div className="services-container">
                {vas1.map((service, index) => {
                    // Split the title into words and insert a line break
                    const formattedTitle = service.title.split('/').map((part, i) => (
                        i === 0 ? <>{part}</> : <><br />{part}</>
                    ));

                    return (
                        <a key={index} href={service.link} className="service-card">
                            <img src={service.image} alt={service.title} />
                            <div className="overlay"></div>
                            <p>{formattedTitle}</p>
                        </a>
                    );
                })}
            </div>
            <div className="services-container">
                {vas2.map((service, index) => {
                    // Split the title into words and insert a line break
                    const formattedTitle = service.title.split('/').map((part, i) => (
                        i === 0 ? <>{part}</> : <><br />{part}</>
                    ));

                    return (
                        <a key={index} href={service.link} className="extra-card">
                            <img src={service.image} alt={service.title} />
                            <div className="overlay"></div>
                            <p>{formattedTitle}</p>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default ValueAddedServices;
