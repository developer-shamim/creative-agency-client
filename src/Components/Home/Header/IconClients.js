import React from 'react';
import './Header.css'

const IconClients = () => {
    return (
        <div className="d-flex row mt-5">
            <div className="col-md-2 mr-4">
                <img className="icom" src="/images/slack.png" alt=""/>
            </div>

            <div className="col-md-2 mr-4">
                <img className="icom" src="/images/google.png" alt=""/>
            </div>

            <div className="col-md-2 mr-4">
                <img className="icom" src="/images/uber.png" alt=""/>
            </div>

            <div className="col-md-2 mr-4">
                <img className="icom" src="/images/netflix.png" alt=""/>
            </div>

            <div className="col-md-2 mr-4">
                <img className="icom" src="/images/airbnb.png" alt=""/>
            </div>
        </div>
    );
};

export default IconClients;