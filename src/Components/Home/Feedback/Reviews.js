import React from 'react';
import './Feedback.css';

const Reviews = ({review}) => {
    return (
        <div className="align-items-center mt-5 col-4 mb-5 ml-auto">

            <div className="card-deck">
                <div className=" card align-items-center">
                    <img src={review.img} className="card-img-top" alt="..."/>
                    <h5 className="card-title text-center">{review.name}</h5>
                    <p className="card-text text-center">{review.position}</p>
                
                <div className="card-body">
                    <p className="card-text text-center">{review.description}</p>
                </div>
                    
                </div>
            </div>
        </div>


    );
};

export default Reviews;