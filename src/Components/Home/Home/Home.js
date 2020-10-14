import React from 'react';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import WorksSlides from '../WorksSlide/WorksSlides';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <section className="container">
            <Services></Services>
            </section>
            <section>
                <WorksSlides></WorksSlides>
            </section>
            <section>
                <Feedback></Feedback>
            </section>
            
            <section>
                <Footer></Footer>
            </section>
            
        </div>
    );
};

export default Home;