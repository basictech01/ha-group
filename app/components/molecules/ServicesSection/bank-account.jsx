import React from 'react'
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import './business-setup.css';
import BlueEmpty3WhiteFilledRightFace from "../../atoms/Triangles/1BlueEmpty3WhiteFilledRightFace";
import BlueEmpty3WhiteFilledLeftFace from "../../atoms/Triangles/1BlueEmpty3WhiteFilledLeftFace";

const BankAccount = () => {
    return (
        <>
    <Header />
    <div className="service-container">
      <div className="service-row">
        <div className="triangle-design"><BlueEmpty3WhiteFilledRightFace /></div> {/* Triangle Design */}
        <div className="service-text">
          <h2>
            Bank <span className="highlight">Account</span>
          </h2>
          <p>
          The Free Zone is a new idea located in the heart of the United Arab Emirates. It represents not only a geographical place but it is a land where you can prosper and enjoy at the same time.
          </p>
        </div>
        <div className="service-image">
          <img src="/assets/images/services/business-setup.png" alt="Business Setup" />
        </div>
        <div className="triangle-design right"><BlueEmpty3WhiteFilledLeftFace /></div> {/* Right Triangle */}
      </div>
      <div className="service-row">{/* Triangle Design */}{/* Triangle Design */}
        <div className="service-text">
          <h2>
            Corporate <span className="highlight">BA</span>
          </h2>
          <p>
          Everybody dreams of visiting Dubai, but not everyone gets there. Why? The visa procedures can be quite complex. Don't worry, we're the experts, and we'll take care of it for you. We provide a variety of visa services in Dubai, helping individuals and businesses across the Emirates with documentation and issuance. Our commitment is to provide guidance and support during the visa and documentation process, prioritizing your convenience and peace of mind. Explore our services for a hassle-free visa experience.  Constant not Update
          </p>
        </div>
        <div className="service-image">
          <img src="/assets/images/services/free-zone.png" alt="Free Zone" />
        </div>
        <div className="triangle-design right"><BlueEmpty3WhiteFilledLeftFace /></div> {/* Right Triangle */}
      </div>
      <div className="service-row reverse">{/* Triangle Design */}
      <div className="triangle-design"><BlueEmpty3WhiteFilledRightFace /></div>  
        <div className="service-text">
          <h2>
            Personal <span className="highlight">BA</span>
          </h2>
          <p>
          Everybody dreams of visiting Dubai, but not everyone gets there. Why? The visa procedures can be quite complex. Don't worry, we're the experts, and we'll take care of it for you. We provide a variety of visa services in Dubai, helping individuals and businesses across the Emirates with documentation and issuance. Our commitment is to provide guidance and support during the visa and documentation process, prioritizing your convenience and peace of mind. Explore our services for a hassle-free visa experience.  Constant not Update
          </p>
        </div>
        <div className="service-image">
          <img src="/assets/images/services/free-zone.png" alt="Free Zone" />
        </div>
      </div>
    </div>
    <Footer />
    </>
    );
}

export default BankAccount