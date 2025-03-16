import React, { useState } from "react";
import FAQItem from "./FAQItem";
import "./FAQ.css"; // Import CSS file

const FAQ = () => {
    const faqs = [
        {
            question: "What are the types of business licenses available in the UAE?",
            answer: "There are several types of business licenses, including commercial, industrial, and professional licenses.",
        },
        {
            question: "Can a foreigner own 100% of a business in the UAE?",
            answer: "Yes, in free zones, foreigners can own 100% of a business, but mainland businesses may have restrictions.",
        },
        {
            question: "What is the difference between a free zone company and a mainland company?",
            answer: (
                <>
                    <strong>Free Zone Company:</strong> Operates within a specific free zone area, offers 100% foreign ownership, tax benefits, and simplified processes but is limited in conducting business directly in the UAE mainland.
                    <br />
                    <br />
                    <strong>Mainland Company:</strong> Can operate throughout the UAE and engage in government contracts but may have restrictions on foreign ownership (depending on activity).
                </>
            ),
        },
        {
            question: "How long does it take to set up a business in the UAE?",
            answer: "It depends on the business type, but usually, it takes between 1 to 4 weeks.",
        },
        {
            question: "Do I need a physical office to start a business in the UAE?",
            answer: "For some business activities, a physical office is required, while others can operate remotely.",
        },
        {
            question: "Are there any corporate taxes in the UAE?",
            answer: "Currently, the UAE has a corporate tax of 9% for businesses earning above a certain threshold.",
        },
        {
            question: "What is the cost of setting up a business in the UAE?",
            answer: "The cost varies depending on the license type, office space, and business activity.",
        },
        {
            question: "What are the key benefits of setting up a business in the UAE?",
            answer: "Key benefits include a tax-free environment, 100% foreign ownership in free zones, and ease of doing business.",
        },
    ];

    return (
        <section className="faq-section">
            <div className="faq-container">
                <h2 className="faq-title">
                    Frequently Asked <span className="highlight">Question</span>
                </h2>
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
};

export default FAQ;
