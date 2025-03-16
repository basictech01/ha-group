import React from "react";
import Button from "../atoms/HeaderButton";

const ActionButton = () => {
    const handleClick = () => {
        // Navigate to appointment route
        window.location.href = '/appointment';
    };

    return <Button label="Book Appointment" onClick={handleClick} />;
};

export default ActionButton;
