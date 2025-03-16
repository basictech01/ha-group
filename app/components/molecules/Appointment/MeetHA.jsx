import React from "react";
import "./MeetHA.css";
import SectionHeader from "../../atoms/SectionHeader";
import HeaderButton from "../../atoms/HeaderButton";

const MeetHA = () => {
    return (
        <section className="about-container">
            <SectionHeader label="Meet" highlightedLabel="HA Group" align="left" />
            <h3 className="about-subtitle">Why You’ll Love Working with HA Group</h3>
            <p className="about-description">
                Welcome to HA Group, where we’ve blended the best of both worlds—
                traditional business wisdom and fresh, innovative thinking. We champion
                an environment where every idea is valued, diversity flourishes, and
                success stories are a daily event.
            </p>

            <div className="features-grid">
                <div className="feature-item">
                    <h4>Networking Opportunities</h4>
                    <p>
                        Expand your network by connecting with Set Hub’s varied mix of
                        businesses.
                    </p>
                </div>
                <div className="feature-item">
                    <h4>Diverse Freezone Options</h4>
                    <p>Whatever your business type, we’ve got a spot for you.</p>
                </div>
                <div className="feature-item">
                    <h4>Comprehensive Support</h4>
                    <p>
                        Access our 300+ tailored services to smoothly launch and run your
                        business.
                    </p>
                </div>
                <div className="feature-item">
                    <h4>Accelerated Business Setup</h4>
                    <p>
                        Enjoy quicker setup times through our special partnerships with
                        local authorities.
                    </p>
                </div>
                <div className="feature-item">
                    <h4>Customer-Centric</h4>
                    <p>
                        We always aim to be customer-first, reliable, and empowering. We
                        understand the complexity of our industry and would not want anyone
                        to feel alienated.
                    </p>
                </div>
                <div className="feature-item">
                    <h4>Strategic Office Locations</h4>
                    <p>Strategically situated for superior access and business leverage.</p>
                </div>
            </div>
            <HeaderButton label="Know More" />
        </section>
    );
};

export default MeetHA;
