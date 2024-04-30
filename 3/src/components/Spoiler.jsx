import React, { useState } from 'react';

const Spoiler = ({ header = "+", open = true, children }) => {
    const [isOpen, setIsOpen] = useState(open);

    const toggleSpoiler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div onClick={toggleSpoiler}>{header}</div>
            {isOpen && children}
        </div>
    );
};

export default Spoiler;
