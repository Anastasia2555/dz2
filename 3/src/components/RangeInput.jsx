import React from 'react';

const RangeInput = ({ min, max, ...rest }) => {
    const inputStyle = {
        border: min > 0 || max > 0 ? "1px solid red" : "1px solid black"
    };

    return <input type="text" style={inputStyle} {...rest} />;
};

export default RangeInput;
