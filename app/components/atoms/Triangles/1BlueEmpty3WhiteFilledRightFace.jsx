import React from 'react';

const BlueEmpty3WhiteFilledLeftFace = () => {
    return (
        <div className="triangles-container">
            <img src="assets/images/home/white_triangle_left.svg" alt="" className="footer-svg-top-left-below" />
            <img src="assets/images/home/white_triangle.svg" alt="" className="footer-svg-top-left-above" />
            <img src="assets/images/home/hollow_triangular_blue.svg" alt="" className="footer-svg-top-left" />
            <img src="assets/images/home/Subtract.png" alt="" className="footer-svg-top-left-small" />
            <style jsx>{`
                .footer-svg-top-left {
                    position: absolute;
                    top: 140px;
                    left: 0;
                    pointer-events: none;
                    z-index: 1;
                    max-width: 180px;
                    transform: scaleX(-1);
                }

                .footer-svg-top-left-small {
                    position: absolute;
                    top: 280px;
                    left: 40px;
                    pointer-events: none;
                    z-index: 1;
                    max-width: 80px;
                    transform: scaleX(-1);
                }

                .footer-svg-top-left-below {
                    position: absolute;
                    top: 220px;
                    left: 0;
                    pointer-events: none;
                    z-index: 1;
                    max-width: 180px;
                    transform: scaleX(-1);
                }

                .footer-svg-top-left-above {
                    position: absolute;
                    top: 100px;
                    left: 0;
                    pointer-events: none;
                    z-index: 1;
                    max-width: 120px;
                    transform: scaleX(-1);
                }
            `}</style>
        </div>
    );
};

export default BlueEmpty3WhiteFilledLeftFace;