import React from 'react'
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import './business-setup.css';
import BlueEmpty3WhiteFilledRightFace from "../../atoms/Triangles/1BlueEmpty3WhiteFilledRightFace";
import BlueEmpty3WhiteFilledLeftFace from "../../atoms/Triangles/1BlueEmpty3WhiteFilledLeftFace";

const CompanyLiquidation = () => {
    return (
        <>
    <Header />
    <div className="service-container">
      <div className="service-row">
        <div className="triangle-design"><BlueEmpty3WhiteFilledRightFace /></div> {/* Triangle Design */}
        <div className="service-text">
          <h2>
          Company<span className="highlight"> Liquidation</span>
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida nisl massa, a cursus dui gravida at. Aliquam id fermentum odio.
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
          Cras  <span className="highlight"> molestie</span>
          </h2>
          <p>
          Cras molestie mi id magna scelerisque porta. Curabitur elementum vitae dui eget dignissim. Nunc turpis arcu, commodo vel placerat et, ornare vestibulum mi. Quisque condimentum tristique vulputate. Pellentesque facilisis molestie lectus, at efficitur nisl commodo in. Proin at massa bibendum, placerat sem nec, scelerisque tellus. Mauris a purus faucibus, mattis nunc vel, pellentesque turpis. Integer vitae pellentesque lacus.
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
          Pellentesque<span className="highlight"> facilisis </span>
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida nisl massa, a cursus dui gravida at. Aliquam id fermentum odio. Quisque non enim ac nibh rhoncus dapibus. Etiam ornare tristique ornare. Curabitur ipsum ipsum, feugiat ut ultrices in, bibendum ac nulla. Etiam sit amet vestibulum sem. Phasellus non volutpat tellus. Curabitur finibus eros ac metus feugiat, non pretium augue iaculis. 
          </p>
        </div>
        <div className="service-image">
          <img src="/assets/images/services/free-zone.png" alt="Free Zone" />
        </div>
      </div>
      <div className="service-row">
        <div className="service-text">
          <h2>
            Lorem<span className="highlight"> Ipsum</span>
          </h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida nisl massa, a cursus dui gravida at. Aliquam id fermentum odio. Quisque non enim ac nibh rhoncus dapibus. Etiam ornare tristique ornare. Curabitur ipsum ipsum, feugiat ut ultrices in, bibendum ac nulla. Etiam sit amet vestibulum sem. Phasellus non volutpat tellus. Curabitur finibus eros ac metus feugiat, non pretium augue iaculis. 
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

export default CompanyLiquidation