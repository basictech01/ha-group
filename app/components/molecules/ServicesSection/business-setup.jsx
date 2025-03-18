import React from 'react';
import { Link } from "react-router-dom";
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import './services.css';
import BlueEmpty3WhiteFilledRightFace from "../../atoms/Triangles/1BlueEmpty3WhiteFilledRightFace";
import BlueEmpty3WhiteFilledLeftFace from "../../atoms/Triangles/1BlueEmpty3WhiteFilledLeftFace";


const services = [ // ✅ Renamed from BusinessSetup
    {
      title: "Business Setup",
      description:
        "Whether you're looking to establish your venture on the mainland, leverage the advantages of Freezones, or explore the benefits of an offshore jurisdiction, we have you covered.",
      image: "/assets/images/services/business-setup.png",
    },
    {
      title: "Free Zone",
      description:
        "The Free Zone is a new idea located in the heart of the United Arab Emirates. It represents not only a geographical place but it is a land where you can prosper and enjoy at the same time. This dynamic platform has become a lighthouse for global visionaries, offering them a canvas on which to paint their ambitions free from all the potential hurdles. By starting a business setup in a Free Zone you can have an experience that is the fusion of creativity and entrepreneurial spirit.",
      image: "/assets/images/services/free-zone.png",
    },
    {
      title: "Visa Services",
      description:
        "Everybody dreams of visiting Dubai, but not everyone gets there. Why? The visa procedures can be quite complex. Don't worry, we're the experts, and we'll take care of it for you. We provide a variety of visa services in Dubai, helping individuals and businesses across the Emirates with documentation and issuance. Our commitment is to provide guidance and support during the visa and documentation process, prioritizing your convenience and peace of mind. Explore our services for a hassle-free visa experience.",
      image: "/assets/images/services/visa-services.png",
    },
    {
      title: "Offshore Company Formation",
      description:
        "Are you thinking about forming an offshore company? Then you have landed at the right place. Dive into the complexities of Offshore Company Formation in Dubai, a decision that opens unlimited opportunities. HA Group reveals the distinctive characteristics of UAE Offshore Companies, with a focus on Dubai's effectiveness as a worldwide commercial hub. We will guide you and clear your doubts by providing all the information.",
      image: "/assets/images/services/offshore-company.png",
    },
];

const BusinessSetup = () => { // ✅ Component name fixed
    return (
        <div>
          <Header />
          <section className="services">
    <div className="container">
        {services.map((service, index) => {
            const words = service.title.split(" ");
            const lastWord = words.pop(); // Extract last word
            const firstPart = words.join(" "); // Remaining words

            return (
                <div 
                    key={index} 
                    className={`service-item ${
                        index < 2 || index % 2 === 0 ? "text-left" : "image-left"
                    }`}
                >
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

                    {/* Left Triangle for alternating sections */}
                    {index >= 2 && index % 2 !== 0 && (
                        <BlueEmpty3WhiteFilledLeftFace className="triangle triangle-left" />
                    )}

                    {/* Right Triangle for alternating sections */}
                    {index % 2 === 0 && (
                        <BlueEmpty3WhiteFilledRightFace className="triangle triangle-right" />
                    )}
                </div>
            );
        })}
    </div>
</section>


          <Footer />
        </div>
      );
      
};

export default BusinessSetup;
