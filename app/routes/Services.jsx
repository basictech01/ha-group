import React from "react";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import ServicesSection from "../components/molecules/ServicesSection/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Services;
