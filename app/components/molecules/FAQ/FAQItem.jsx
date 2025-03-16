import React, { useState } from "react";
import "./FAQ.css";

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`faq-item ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="faq-question">
                <span className={`faq-text ${isOpen ? "active" : ""}`}>{question}</span>
                <span className="faq-icon">{isOpen ? "−" : "+"}</span>
            </div>
            {isOpen && <div className="faq-answer">{answer}</div>}
        </div>
    );
};

export default FAQItem;
