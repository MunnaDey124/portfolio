import React from 'react';
import './Sectioncard.css';

const SecCard = ({card}) => {
    return (
        <div className="container ">
            <div className="col-md-8">
            <div className="card1" >
                <h2>{card.title}</h2>
                <p>{card.des}</p>
                <h5>{card.pro}</h5>
            </div>
            
        </div>

        </div>
    );
};

export default SecCard;