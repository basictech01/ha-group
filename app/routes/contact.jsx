import React, { useState } from "react";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import "../components/styles/Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        companyName: "",
        businessEmail: "",
        phoneNumber: "",
        message: "",
        goals: []
    });

    const businessGoals = [
        "Digital Transformation / BPO",
        "Modernise Legacy Systems & Technology",
        "Develop Robust Apps & Products",
        "Scale or Building In-House Tech Tearms",
        "Unlock Value With Data & Analytics",
        "Create Stunning Digital Experiences"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleGoalChange = (goal) => {
        setFormData(prev => {
            const newGoals = prev.goals.includes(goal)
                ? prev.goals.filter(g => g !== goal)
                : [...prev.goals, goal];
            return { ...prev, goals: newGoals };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission
        console.log(formData);
    };

    return (
        <div style={{ backgroundColor: "#F5F5F5" }}>
            <Header />
            <div className="contact-container">
                <div className="contact-hero-section">
                    <div className="contact-header">
                        {/*<span className="lets-contact">Let's Contact</span>*/}
                        <h1>We'll contact you within a couple of hours to schedule a meeting to discuss your goals.</h1>
                        <div className="contact-actions">
                            <button className="action-button schedule-now">Schedule Now</button>
                            <button className="action-button drop-message">Drop A Message</button>
                        </div>
                    </div>
                    <div className="testimonials-section">
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <img src="/assets/images/avatar1.jpg" alt="Adrian Barak" className="testimonial-avatar" />
                                <div className="testimonial-info">
                                    <span className="testimonial-name">Adrian Barak</span>
                                    <span className="testimonial-role">Web Developer at Google</span>
                                </div>
                            </div>
                            <div className="testimonial-rating">★★★★☆</div>
                            <p className="testimonial-text">"It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout."</p>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-header">
                                <img src="/assets/images/avatar1.jpg" alt="Adrian Barak" className="testimonial-avatar" />
                                <div className="testimonial-info">
                                    <span className="testimonial-name">Adrian Barak</span>
                                    <span className="testimonial-role">Manager</span>
                                </div>
                            </div>
                            <div className="testimonial-rating">★★★★☆</div>
                            <p className="testimonial-text">"It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout."</p>
                        </div>
                    </div>
                </div>
                <div className="contact-form-section">
                    <div className="business-goals">
                        <h2>What's your immediate business goal</h2>
                        <ul className="goals-list">
                            {businessGoals.map((goal, index) => (
                                <li key={index} className="goal-item">
                                    <span className="tick-mark">✓</span>
                                    {goal}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="required">First name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="optional">Company name</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="required">Business email</label>
                            <input
                                type="email"
                                name="businessEmail"
                                value={formData.businessEmail}
                                onChange={handleInputChange}
                                required
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            />
                        </div>
                        <div className="form-group">
                            <label className="required">Phone number</label>
                            <div className="phone-input-container">
                                <select className="country-select">
                                    <option value="+92">Pakistan</option>
                                    <option value="+971">UAE</option>
                                    <option value="+1">USA</option>
                                </select>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className="phone-input"
                                    required
                                    pattern="[0-9]*"
                                    inputMode="numeric"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="required">How can we help</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="4"
                                required
                            />
                        </div>
                        <div className="recaptcha-container">
                            {/*reCAPTCHA component*/}
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>

                </div>
            </div>
            <Footer />
        </div>
    );
}