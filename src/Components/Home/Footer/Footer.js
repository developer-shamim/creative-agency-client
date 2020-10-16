import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className=" container-fluid footer-area mt-5 pt-5 row d-flex">
            <div className="col-md-4 ml-5 mt-5 mr-auto">
                <h3 className="mb-3 pl-5">Let us handle your projects, professionally</h3>
                <p className="mt-3 pl-5"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis optio dolores reprehenderit labore ullam maiores.</p>
            </div>

            <div className="col-md-6 mt-4 ml-auto">
                <form>
                <div className="form-group">
                    <input className="form-control mt-3" type="email" placeholder="Your Email Address"/>
                </div>
                    
                <div className="form-group">    
                    <input className="form-control mt-4" type="text" placeholder=" Your Name / Company Name"/>
                </div>
                
                <div className="form-group">   
                    <textarea className="form-control mt-4" type="text" placeholder="Your message" id="exampleFormControlTextarea1" rows="4"></textarea>
                </div>
                
                    <button type="submit" className="btn btn-dark mt-4 text-white submit"> Send</button>

                </form>

            </div>
            <div className="col-md-12 mt-5 pt-5 align-items-center" >
                <p className="text-center"> Copyright Orange Labs 2020</p>
            </div>
            
        </div>
    );
};

export default Footer;