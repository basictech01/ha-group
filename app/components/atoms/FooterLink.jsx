import React from "react";

const FooterLink = ({ text, href }) => {
  return (
    <a href={href} className="footer-link">
      {text}
    </a>
  );
};

export default FooterLink;
