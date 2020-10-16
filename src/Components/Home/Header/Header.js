import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import IconClients from './IconClients';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div>
            <section className="bg-yellow">
                <Navbar></Navbar>
              
                <div className="d-flex ml-5">
                    <div className="col-md-4 mt-5 ml-5 ml-5 justify-content-center"> 
                        <h1> Let's Grow Your Brand To The Next Level</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsa eaque voluptas perspiciatis. Consequatur, cum.</p>    
                        <br/>
                        <Link to="/order">
                        <button className="btn btn-dark"> Hire Us </button> 
                        </Link>         
                    </div>

                    <div className="col-md-6">
                        <img className="img-fluid" src="/images/frame.png" alt=""/>
                    </div>

                </div>
                
                </section>  
                <section className="container">
                <IconClients></IconClients>
                </section>
        </div>
    );
};

export default Header;