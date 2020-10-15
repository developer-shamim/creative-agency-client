import React from 'react';
import './Customer.css'
import service1 from '../../images/icons/service2.png'
import ClientDashboard from './ClientDashboard';


const OrderStatus = () => {
    return (
        <div>
            <div>
                <ClientDashboard></ClientDashboard>
            </div>

            <div className="create-event">
                <h5 className=" order-text">Order Status</h5>
                <div className=" mt-5  mb-5 order-box">
                <div className="card-deck">
                    <div className="card align-items-center">
                <img src={service1} className="card-img-top" alt="..."/>
                <div className="card-body">
        
                <h5 className="card-title text-center">Graphic Design</h5>
               
                <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptatum?</p>
                <button className="btn btn-primary">Status</button>
                </div>
            
            </div>
        </div>

        </div>

            </div>
            
        </div>
    );
};

export default OrderStatus;