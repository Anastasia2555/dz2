import React from 'react';

const Swapi = ({ name, gender, hair_color, eye_color }) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Gender: {gender}</p>
            {hair_color !== 'none' && <p>Hair Color: {hair_color}</p>}
            {gender !== 'n/a' && (
                <p style={{ color: eye_color }}>Eye Color: {eye_color}</p>
            )}
        </div>
    );
};

export default Swapi;
