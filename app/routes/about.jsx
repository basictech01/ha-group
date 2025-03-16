import React from 'react';
import Footer from '../components/organisms/Footer';
import Header from '../components/organisms/Header';
import AboutHeader from '../components/molecules/AboutUs/AboutHeader';
import WhyHAGroup from '../components/molecules/AboutUs/WhyHAGroup';

export default function Appointment() {
    return (
        <div style={{ backgroundColor: "#F5F5F5" }}>
            <Header />
            <AboutHeader
                title="About us"
                description="At HA Group, we are more than just engineers; we are visionary creators on a mission. Our purpose extends beyond the realm of technology—it's about serving humanity and unlocking its limitless potential. With a profound commitment to innovation, we transform entrepreneurial dreams into tangible realities."
                imageUrl="assets/images/about/main.png"
            />
            <WhyHAGroup />
            <Footer />
        </div>
    );
}