import React from 'react';
import Population from './Population';

const PopulationList = () => {
    const data = [
        { Year: 2000, Population: 1000 },
        { Year: 2010, Population: 1500 },
        { Year: 2020, Population: 2000 }
    ];

    return (
        <div>
            {data.map((item, index) => (
                <Population key={index} {...item} />
            ))}
        </div>
    );
};

export default PopulationList;
