import React from "react";
import FooterColumn from "../molecules/FooterColumn";
import SocialIcon from "../atoms/SocialIcon";
import "../styles/Footer.css";
import BlueEmpty3WhiteFilledLeftFace from "../atoms/Triangles/1BlueEmpty3WhiteFilledLeftFace";
import BlueEmpty3WhiteFilledRightFace from "../atoms/Triangles/1BlueEmpty3WhiteFilledLeftFace";
import { href } from "react-router";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <BlueEmpty3WhiteFilledLeftFace />
            <img src="assets/images/home/blue_filled_bottom.png" alt="" className="footer-svg-bottom-left" />
            <img src="assets/images/home/white_filled_bottom.png" alt="" className="footer-svg-bottom-left-white" />
            <img src="assets/images/home/white_empty_small.png" alt="" className="footer-svg-bottom-left-above" />
            <footer className="footer">
                <div className="footer-container">
                    {/* Left Section: Company Info */}
                    <div className="footer-info">
                        <img src="assets/images/home/footer_logo.png" alt="HA Group Logo" className="footer-logo" />
                        <p className="footer-description">
                            Licensed, Authorized and Approved By <br /> Government As 'H N A CORPORATE SERVICES PROVIDER'
                        </p>
                        <div className="social-icons">
                            <SocialIcon icon="assets/images/home/facebook.png" link="#" />
                            <SocialIcon icon="assets/images/home/twitter.png" link="#" />
                            <SocialIcon icon="assets/images/home/instagram.png" link="#" />
                            <SocialIcon icon="assets/images/home/linkedin.png" link="#" />
                        </div>
                        <div className="footer-logos">
                            <img src="assets/images/home/dubai_visa.png" alt="Golden Visa" />
                            <img src="assets/images/home/dubai_invest.png" alt="Dubai Investment" />
                            <img src="assets/images/home/dubai_digital.png" alt="Digital Dubai" />
                        </div>
                    </div>

                    {/* Right Section: Links */}
                    <div className="footer-links">
                        <FooterColumn
                            title="Business Setup"
                            links={[
                                { text: "Mainland" },
                                { text: "Freezone" },
                                { text: "Offshore" },
                                { text: "Business Trade License" },
                            ]}
                        />
                        <FooterColumn
                            title="Services"
                            links={[
                                { text: "Visa Services in Dubai", href: "#" },
                                { text: "Family Visa Assistance" },
                                { text: "Golden Visa" },
                                { text: "PRO Services in Dubai" },
                                { text: "Bank Account Opening in Dubai" },
                            ]}
                        />
                        <FooterColumn
                            title="Get in Touch"
                            links={[
                                { text: "About Us", href: "#" },
                                { text: "Partners", href: "#" },
                                { text: "Privacy Policy", href: "#" },
                                { text: "Terms and Conditions", href: "#" },
                                { text: "+971 48 241725" },
                                { text: "+971 54 2737405" },
                                { text: "info@hagroup.ae", href: "mailto:info@hagroup.ae" },
                            ]}
                        />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
