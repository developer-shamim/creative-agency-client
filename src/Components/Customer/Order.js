import React, { useContext } from 'react';
import './Customer.css'
import { useForm } from "react-hook-form";
import ClientDashboard from './ClientDashboard';
import { UserContext } from '../../App';


const Order = () => {
  const [loggedInUser ] = useContext (UserContext)
  const { register, handleSubmit, errors } = useForm();

   const onSubmit = data => {
      console.log(data)
    fetch('https://floating-mesa-43526.herokuapp.com/addOrder', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data, {email: loggedInUser.email})
    })
    .then(res => res.json())
    .then(success => {
        if(success){
            // alert('Appointment created successfully.');
        }
    })
  }
    
    return (
        <div>
        <div>
             <ClientDashboard></ClientDashboard>
         </div>

        <div className="create-event">
          <h5 className=" order-text">Place Order</h5>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
            <input type="text"
              className="form-control"
              ref={register({ required: true })} 
              name="name"
              placeholder="Your name / Company's name"
            />
              {errors.name && <span className="text-danger">This field is required</span>} 
            </div>
     
        
          <br/>
          <div className="form-group">
              <input type="text"
                className="form-control"
                ref={register({ required: true })} 
                name="email"
                placeholder="Your email address"
              />
          {errors.name && <span className="text-danger">This field is required</span>}
          </div>

          <br/>
          <div className="form-group">
              <input type="text"
                className="form-control"
                name="service"
                ref={register({ required: true })} 
                placeholder="Graphic Design"
              />
            {errors.name && <span className="text-danger">This field is required</span>}      
          </div>  

          <br/>
          <div className="form-group">
              <input type="text"
                className="form-control"
                name="details"
                ref={register({ required: true })} 
                placeholder="Project Details"
                
              />
            {errors.name && <span className="text-danger">This field is required</span>}
          </div>
          <br/>

          <div className="row">

            <div className="col-5">
                <input type="text"
                  className="form-control"
                  name="price"
                  placeholder="Price"
                />
              {errors.name && <span className="text-danger">This field is required</span>}          
            </div>
            
            <div className="col-7">
              <button type="file" className="btn btn-success"> Upload project file </button>
          </div>

          </div>
          <br/>
        <div>
            <button  type="submit" className="btn btn-dark"> Send </button>
        </div>
        
          </form>
      </div>
      </div>

    );
};

export default Order;