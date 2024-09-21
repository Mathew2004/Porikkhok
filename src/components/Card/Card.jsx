import React from 'react';

const Card = ({ title, description }) => {
    return (
        <div className="card bg-neutral text-neutral-content shadow-lg">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;