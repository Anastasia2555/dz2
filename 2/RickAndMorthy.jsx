import React from 'react';

const RickAndMorthy = ({ name, air_date, image, characters }) => {
    return (
        <div>
            <img src={image} alt={name} />
            <p>Name: {name}</p>
            <p>Air Date: {air_date}</p>
            <p>Characters:</p>
            <ul>
                {characters.map((character, index) => (
                    <li key={index}>{character.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default RickAndMorthy;
