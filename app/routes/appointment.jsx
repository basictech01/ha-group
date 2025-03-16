import React from "react";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import ConnectSection from "../components/molecules/Appointment/ConnectSection";
import LandScape from "../components/atoms/LandScape";
import MeetHA from "../components/molecules/Appointment/MeetHA";
export default function Appointment() {
    return (
        <div style={{ backgroundColor: "#F5F5F5" }}>
            <Header />
            <LandScape />
            <ConnectSection />
            <MeetHA />
            <Footer />
        </div>
    );
}