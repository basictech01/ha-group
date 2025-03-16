import BlogSection from "../components/molecules/BlogSection/BlogSection";
import FAQ from "../components/molecules/FAQ/FAQ";
import HeroSection from "../components/molecules/HeroSection/HeroSection";
import NewsEvents from "../components/molecules/NewsSection/NewsEvents";
import PartnerSection from "../components/molecules/PartnerSection/PartnerSection";
import ServicesSection from "../components/molecules/ServicesSection/ServicesSection";
import Testimonials from "../components/molecules/Testimonials/Testimonials";
import ValueAddedServices from "../components/molecules/ValueAddedServices/ValueAddedServices";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";

export function meta() {
  return [
    { title: "HA-Group" },
    { name: "description", content: "Transforming Visions into Ventures" },
  ];
}

export default function Home() {
  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <Header />
      <HeroSection />
      <PartnerSection />
      <ServicesSection />
      <Testimonials />
      <ValueAddedServices />
      <BlogSection />
      <NewsEvents />
      <FAQ />
      <Footer />
    </div>
  );
}