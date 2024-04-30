import React from 'react';
import Swapi from './Swapi';

const SwapiList = () => {
    const data = [
        { name: 'Luke Skywalker', gender: 'male', hair_color: 'blond', eye_color: 'blue' },
        { name: 'Darth Vader', gender: 'male', hair_color: 'none', eye_color: 'yellow' },
        { name: 'Leia Organa', gender: 'female', hair_color: 'brown', eye_color: 'brown' }
    ];

    return (
        <div>
            {data.map((item, index) => (
                <Swapi key={index} {...item} />
            ))}
        </div>
    );
};

export default SwapiList;
