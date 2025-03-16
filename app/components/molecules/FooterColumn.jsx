import React from "react";
import FooterLink from "../atoms/FooterLink";
import FooterText from "../atoms/FooterText";

const FooterColumn = ({ title, links }) => {
    return (
        <div className="footer-column">
            <h3 className="footer-title">{title}</h3>
            {links.map((link, index) =>
                link.href ? (
                    <FooterLink key={index} text={link.text} href={link.href} />
                ) : (
                    <FooterText key={index} text={link.text} />
                )
            )}
        </div>
    );
};

export default FooterColumn;
