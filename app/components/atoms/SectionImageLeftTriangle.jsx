import React from "react";

const SectionImageLeft = ({ imageUrl }) => {
    return (
        <div
            style={{
                position: 'relative',
                width: '50%',
                display: 'flex',
                justifyContent: 'flex-end',
            }}
        >
            <img src={imageUrl} alt="Team"
                style={{
                    width: '100%',
                    maxWidth: '572px',
                    height: 'auto',
                    maxHeight: '684px',
                    objectFit: 'contain',
                }} />
            <img
                src="assets/images/appointment/connect_triangle.png"
                alt="Overlay"
                style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-40px',
                    pointerEvents: 'none',
                    zIndex: 1,
                    maxWidth: '180px',
                }}
            />
        </div>
    );
};

export default SectionImageLeft;
