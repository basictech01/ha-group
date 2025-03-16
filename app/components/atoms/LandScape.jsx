import React from "react";

const LandScape = ({
    title = "Empower Your Business Dreams",
    subtitle = "Schedule a Consultation with Our Experts and Unlock Your Path to Success",
    imageUrl = "/assets/images/appointment/main.png",
    imageAlt = "Consultation Team",
    backgroundColor = "#f9fafe",
    textColor = "white"
}) => {
    return (
        <>
            <style jsx>{`
        .consultation-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: ${backgroundColor};
          border-radius: 10px;
          overflow: hidden;
          padding: 30px;
          position: relative;
        }

        .consultation-content {
          position: absolute;
          color: ${textColor};
          margin-top: 350px;
          margin-left: 100px;
          max-width: 40%;
          z-index: 2;
        }

        .consultation-title {     
          font-family: "Lora", serif;
          font-size: 56px;
          font-weight: bold;
        }

        .consultation-subtitle {
          font-family: "Source Sans 3", sans-serif;
          font-size: 26px;
          margin-top: -20px;
        }

        .consultation-image {
          width: 100%;
          position: relative;
        }

        .consultation-image img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
        }
      `}</style>

            <section className="consultation-container">
                <div className="consultation-content">
                    <h2 className="consultation-title">{title}</h2>
                    <p className="consultation-subtitle">
                        {subtitle}
                    </p>
                </div>
                <div className="consultation-image">
                    <img src={imageUrl} alt={imageAlt} />
                </div>
            </section>
        </>
    );
};

export default LandScape;