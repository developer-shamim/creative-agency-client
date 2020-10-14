import React from 'react';
import './Feedback.css';
import customer1 from '../../../images/customer-1.png'
import customer2 from '../../../images/customer-2.png'
import customer3 from '../../../images/customer-3.png'
import Reviews from './Reviews';



const reviewData = [
    { id: '1', img: customer1, name: 'Nash Patrik', position: 'CEO, Manpol', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quia amet repudiandae, accusamus.',},
    { id: '2', img: customer2, name: 'Miriam Barron', position: 'CEO, Rampal', description: 'dolor sit amet consectetur adipisicing elit. Molestiae quia amet repudiandae, accusamus doloribus.',},
    { id: '3', img: customer3, name: 'Bria Malone', position: 'CEO, Sampol', description: 'dolor sit amet consectetur adipisicing elLorem ipsum, dolor sit amet consectetur adipisicing elit.',},
];

const Feedback = () => {
    return (
        <div className="container mt-5 pt-5 mb-5 pb-5">
            <div className="">
                <h3 className="text-center"> Clients <span className="text-success"> Feedback </span> </h3>
                
            </div>

            <div className="container d-flex row">
                {
                reviewData.map(review => <Reviews review={review}></Reviews>)
                }
            </div>
        </div>
    );
};

export default Feedback;
