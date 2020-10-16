import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light mr-5 pl-5 ml-5">
            <img className="navbar-brand" src="/images/logo.png" alt=""/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                <Link to="/home" className="nav-link active mr-5" >Home <span className="sr-only">(current)</span></Link>
                <Link to="/service" className="nav-link mr-5" >Our portfolio</Link>
                <Link to="/"className="nav-link mr-5" href="/#">Our Teams</Link>
                <Link to="/contact" className="nav-link mr-5" href="/#">Contact Us</Link>
                <Link to="/admin" className="nav-link mr-5 text-center bg-dark text-white">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;