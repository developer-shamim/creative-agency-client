import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const ServiceDetails = ({services}) => {
   
    return (
        
        <div className="align-items-center mt-5 d-flex col-4 mb-5 ml-auto">
             
            <div className="card-deck">
            <div className="card align-items-center">
                <img src={`data:image/png;base64,${services.image.img}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                <Link to="/order">
                <h5 className="card-title text-center">{services.service}</h5>
                </Link>
                <p className="card-text text-center">{services.details}</p>
                
                </div>
            
            </div>
        </div>
        </div>
    );
};

export default ServiceDetails;