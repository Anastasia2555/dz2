import React from 'react';

const Pagination = ({ max, render }) => {
    const Render = render;

    const handlePageChange = (page) => {
        console.log(`Go to page ${page}`);
    };

    const pages = Array.from({ length: max }, (_, i) => i + 1);

    return (
        <div>
            {pages.map(page => (
                <Render key={page} page={page} onClick={() => handlePageChange(page)} />
            ))}
        </div>
    );
};

export default Pagination;
