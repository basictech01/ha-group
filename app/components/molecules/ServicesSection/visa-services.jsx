import React from 'react';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import './business-setup.css';
import BlueEmpty3WhiteFilledRightFace from "../../atoms/Triangles/1BlueEmpty3WhiteFilledRightFace";
import BlueEmpty3WhiteFilledLeftFace from "../../atoms/Triangles/1BlueEmpty3WhiteFilledLeftFace";


const VisaServices = () => {
    return (
        <>
    <Header />
    <div className="service-container">
      <div className="service-row">
        <div className="triangle-design"><BlueEmpty3WhiteFilledRightFace /></div> {/* Triangle Design */}
        <div className="service-text">
          <h2>
            Visa <span className="highlight">Services</span>
          </h2>
          <p>
            Whether you're looking to establish your venture on the mainland,
            leverage the advantages of Freezones, or explore the benefits of an
            offshore jurisdiction, we have you covered.
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
          Employment <span className="highlight">Visa</span>
          </h2>
          <p>
          The Free Zone is a new idea located in the heart of the United Arab Emirates. It represents not only a geographical place but it is a land where you can prosper and enjoy at the same time. This dynamic platform has become a lighthouse for global visionaries, offering them a canvas on which to paint their ambitions free from all the potential hurdles. By starting a business setup in a Free Zone you can have an experience that is the fusion of creativity and entrepreneurial spirit. Constant not Update
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
          Family <span className="highlight">Visa</span>
          </h2>
          <p>
          Everybody dreams of visiting Dubai, but not everyone gets there. Why? The visa procedures can be quite complex. Don't worry, we're the experts, and we'll take care of it for you. We provide a variety of visa services in Dubai, helping individuals and businesses across the Emirates with documentation and issuance. Our commitment is to provide guidance and support during the visa and documentation process, prioritizing your convenience and peace of mind. Explore our services for a hassle-free visa experience.  Constant not Update
          </p>
        </div>
        <div className="service-image">
          <img src="/assets/images/services/free-zone.png" alt="Free Zone" />
        </div>
      </div>
      <div className="service-row">{/* Triangle Design */}
        <div className="service-text">
          <h2>
          Golden <span className="highlight">Visa</span>
          </h2>
          <p>
          Are you thinking about forming an offshore company? Then you have landed at the right place. Dive into the complexities of Offshore Company Formation in Dubai, a decision that opens unlimited opportunities. HA Group reveals the distinctive characteristics of UAE Offshore Companies, with a focus on Dubai's effectiveness as a worldwide commercial hub. We will guide you and clear your doubts by providing all the information. Constant not Update.
          </p>
        </div>
        <div className="service-image">
          <img src="/assets/images/services/free-zone.png" alt="Free Zone" />
        </div>
        <div className="triangle-design right"><BlueEmpty3WhiteFilledLeftFace /></div> {/* Right Triangle */}
      </div>
      <div className="service-row">{/* Triangle Design */}
        <div className="service-text">
          <h2>
            Property Invester <span className="highlight">Visa</span>
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
      <div className="service-row">{/* Triangle Design */}
        <div className="service-text">
          <h2>
            Silver <span className="highlight">Visa</span>
          </h2>
          <p>
          Are you thinking about forming an offshore company? Then you have landed at the right place. Dive into the complexities of Offshore Company Formation in Dubai, a decision that opens unlimited opportunities. HA Group reveals the distinctive characteristics of UAE Offshore Companies, with a focus on Dubai's effectiveness as a worldwide commercial hub. We will guide you and clear your doubts by providing all the information. Constant not Update.
          </p>
        </div>
        <div className="service-image">
          <img src="/assets/images/services/free-zone.png" alt="Free Zone" />
        </div>
        <div className="triangle-design right"><BlueEmpty3WhiteFilledLeftFace /></div> {/* Right Triangle */}
      </div>
    </div>
    <Footer />
    </>
    );
}

export default VisaServices;
