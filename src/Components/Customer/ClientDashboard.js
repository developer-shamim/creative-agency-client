import React, { useContext } from 'react';
import './Customer.css'
import logo from '../../images/logos/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const ClientDashboard = () => {
    const [loggedInUser] = useContext (UserContext);
    return (
        <div className="client-container">
             <div className="">
                <div>
                    <div className="nav-container">
                        <Link to="/"> 
                            <img className="mt-3 ml-4 mb-4 client-logo" src={logo} alt=""/>
                        </Link>
                        
                        <div className="">
                             <p className="user"> logged-in as: {loggedInUser.name} </p> 
                       </div> 
                        
                    </div>
                <div className="left-nav">
                    <div className="vol-reg">
                            <Link to="/order" className="link-text"><FontAwesomeIcon className="client-icon" icon={faShoppingCart} /> Order</Link>
                        </div>

                        <div className="add-event">
                            <Link to="/status" className="link-text"><FontAwesomeIcon className="client-icon" icon={faShoppingBag} />Service list</Link>
                        </div>

                        <div className="add-event">
                            <Link to="/review" className="link-text"><FontAwesomeIcon className="client-icon" icon={faCommentAlt}/> Review</Link>
                        </div>

                    </div>
                    
                    
                   
                </div>
            </div>
            
        </div>
    );
};

export default ClientDashboard;