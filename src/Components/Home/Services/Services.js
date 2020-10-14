import React from 'react';
import './Services.css'
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import service3 from '../../../images/icons/service3.png'
import ServiceDetails from './ServiceDetails';

const serviceData = [
    { id: '1', img: service1, serviceTitle: 'UI & UX Design', description: 'We craft stanning UI for your mobile or web using a well drafted UX to fit your product',},
    { id: '2', img: service2, serviceTitle: 'Graphic Design', description: 'We design amazing flyer, brand identity and social media banners that will stand out your brands among others',},
    { id: '3', img: service3, serviceTitle: 'Web Development', description: 'With well written codes, we build amazing appls for all platform, mobile and web apps in general',},
];
const Services = () => {
    return (
        <div>
            <section>
                <div className="justify-content-center mt-5">
                     <h3 className="text-center mt-5"> Provide awesome <span class="text-success"> services </span> </h3>
                </div>
            </section>
       
       
            <div className="container d-flex row">
                
                {
                    serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                }
                
            </div>
        

        </div>
            

    );
};

export default Services;