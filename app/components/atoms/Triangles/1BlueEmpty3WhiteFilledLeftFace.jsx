import React from 'react';

const BlueEmpty3WhiteFilledLeftFace = () => {
    return (
        <div className="triangles-container">
            <img src="assets/images/home/white_triangle_left.svg" alt="" className="footer-svg-top-right-below" />
            <img src="assets/images/home/white_triangle.svg" alt="" className="footer-svg-top-right-above" />
            <img src="assets/images/home/hollow_triangular_blue.svg" alt="" className="footer-svg-top-right" />
            <img src="assets/images/home/Subtract.png" alt="" className="footer-svg-top-right-small" />
            <style jsx>{`
                .footer-svg-top-right {
                    position: absolute;
                    top: 40px;
                    right: 0;
                    pointer-events: none;
                    z-index: 1;
                    max-width: 180px;
                }

                .footer-svg-top-right-small {
                    position: absolute;
                    top: 180px;
                    right: 40px;
                    pointer-events: none;
                    z-index: 1;
                    max-width: 80px;
                }

                .footer-svg-top-right-below {
                    position: absolute;
                    top: 120px;
                    right: 0;
                    pointer-events: none;
                    z-index: 1;
                    max-width: 180px;
                }

                .footer-svg-top-right-above {
                    position: absolute;
                    top: 0;
                    right: 0;
                    pointer-events: none;
                    z-index: 0;
                    max-width: 120px;
                }
            `}</style>
        </div>
    );
};

export default BlueEmpty3WhiteFilledLeftFace;