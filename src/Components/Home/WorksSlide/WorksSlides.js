import React from 'react';
import './WorksSlides.css'
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'

const WorksSlides = () => {
    return (
        <div className="container-fluid container-slides mt-5">

            <div className="mt-5 pt-5">
                <h3 className="text-white text-center works-title mt-5">Here are some of<span className="text-success"> our works </span> </h3>
            </div>
           
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators mt-5">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="10000">
                        <img src={carousel1} className="d-block w-25" alt="..."/>
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img src={carousel2} className="d-block w-25" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} className="d-block w-25" alt="..."/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>

                            
        </div>
    );
};

export default WorksSlides;