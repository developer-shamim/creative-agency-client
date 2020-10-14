import React, { useContext } from 'react';
import './Admin.css'
import logo from '../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const AdminDashboard = () => {
    const [loggedInUser] = useContext (UserContext);
    return (
        <div className="admin-container">
             <div className="">
                <div>
                    <div className="nav-container">
                        <Link to="/"> 
                            <img className="mt-3 ml-4 mb-4 admin-logo" src={logo} alt=""/>
                        </Link>
                        
                        <div className="">
                             <p className="user"> logged-in as: {loggedInUser.name} </p> 
                       </div> 
                        
                    </div>
                <div className="left-nav">
                    <div className="vol-reg">
                            <Link to="/listing" className="link-text">Order List</Link>
                        </div>

                        <div className="add-event">
                            <Link to="/create" className="link-text">Add Services</Link>
                        </div>

                        <div className="add-event">
                            <Link to="/make" className="link-text">Make Admin</Link>
                        </div>

                    </div>
                    
                    
                   
                </div>
            </div>
            
        </div>
    );
};

export default AdminDashboard;