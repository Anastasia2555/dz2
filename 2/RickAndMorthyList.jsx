import React from 'react';
import RickAndMorthy from './RickAndMorthy';

const RickAndMorthyList = () => {
    const data = [
        {
            name: 'Pilot',
            air_date: 'December 2, 2013',
            image: 'https://example.com/pilot.jpg',
            characters: [{ name: 'Rick Sanchez' }, { name: 'Morty Smith' }]
        },
        {
            name: 'Lawnmower Dog',
            air_date: 'December 9, 2013',
            image: 'https://example.com/lawnmower-dog.jpg',
            characters: [{ name: 'Snuffles' }, { name: 'Jerry Smith' }]
        }
    ];

    return (
        <div>
            {data.map((item, index) => (
                <RickAndMorthy key={index} {...item} />
            ))}
        </div>
    );
};

export default RickAndMorthyList;
