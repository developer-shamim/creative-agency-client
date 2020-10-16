import React, { useEffect, useState } from 'react';
import './Services.css'
import ServiceDetails from './ServiceDetails';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://floating-mesa-43526.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
        
    },[])
    return (
        <div>
            <section>
                <div className="justify-content-center mt-5">
                     <h3 className="text-center mt-5"> Provide awesome <span className="text-success"> services </span> </h3>
                </div>
            </section>
       
       
            <div className="container d-flex row">
                
                {
                    services.map(services => <ServiceDetails services={services}></ServiceDetails>)
                }
                                
            </div>
        

        </div>
            

    );
};

export default Services;