import React from "react";

const SectionHeader = ({ label, highlightedLabel, align = "left" }) => {
  return (
    <>
      <style jsx>{`
        .heading {
          font-size: 78px;
          font-weight: 100;
          color: #000;
          text-align: ${align};
          font-family: "Lora", serif;
          margin-bottom: 5px;
          margin-top: -10px;
        }

        .highlight {
          color: #0197E7;
          font-weight: 600;
        }
      `}</style>

      <h2 className="heading">
        {label} {<span className="highlight">{highlightedLabel}</span>}
      </h2>
    </>
  );
};

export default SectionHeader;