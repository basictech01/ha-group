import React from "react";
import "./ConnectSection.css";
import SectionHeader from "../../atoms/SectionHeader";
import ConnectContent from "./ConnectContent";
import HeaderButton from "../../atoms/HeaderButton";
import SectionImageLeft from "../../atoms/SectionImageLeftTriangle";

const ConnectSection = () => {
    return (
        <section className="connect-section">
            <div className="connect-text">
                <SectionHeader label="Let's" highlightedLabel="Connect" align="left" />
                <ConnectContent />
                <HeaderButton label="Book an appointment" />
            </div>
            <SectionImageLeft imageUrl="/assets/images/appointment/connect.png" />
        </section>
    );
};

export default ConnectSection;
