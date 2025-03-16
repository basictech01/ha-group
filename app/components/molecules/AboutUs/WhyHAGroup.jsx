import React from "react";
import "./WhyHAGroup.css";
import SectionHeader from "../../atoms/SectionHeader";
const WhyHAGroup = () => {
    const features = [
        {
            icon: "assets/images/about/bulb.svg",
            title: "Innovation-First Attitude",
            description:
                "Ordinary isn’t part of our dictionary. We deliver disruptive tech and revolutionary approaches.",
        },
        {
            icon: "assets/images/about/human-centric.svg",
            title: "Human-Centric Approach",
            description:
                "People are at the core of what to do. This applies to the people in our offices and using our solutions.",
        },
        {
            icon: "assets/images/about/obsession.svg",
            title: "Obsession With Quality",
            description:
                "We ensure quality in every aspect - from our talent and processes and all the way to our deliverables.",
        },
        {
            icon: "assets/images/about/diversity.svg",
            title: "Diversity & Inclusion",
            description:
                "Workforce complements our inclusive culture. Their combined creativity drives innovation.",
        },
        {
            icon: "assets/images/about/adaptabilty.svg",
            title: "Adaptability As A Priority",
            description:
                "Markets change and so do yours needs. Techwords’ flexibility enables us to adapt faster to hold the lead.",
        },
        {
            icon: "assets/images/about/focus.svg",
            title: "Focus In The Feature",
            description:
                "We don’t stop your next step to future-proof your solution.",
        },
    ];

    return (
        <section className="why-section">
            <SectionHeader label="Why" highlightedLabel="HA Group?" align="left" />
            <p className="why-description">
                We prioritise our people, ensuring they are nurtured at their <br />fullest
                potential to contribute seamlessly to our vision!
            </p>
            <div className="values-grid">
                {features.map((value, index) => (
                    <div key={index} className={`value-card-${index}`}>
                        <img src={value.icon} className="icon" />
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                    </div>
                ))}
            </div>
        </section >
    );
};


export default WhyHAGroup;
