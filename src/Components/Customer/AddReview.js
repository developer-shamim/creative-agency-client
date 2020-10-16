import React from 'react';
import { useForm } from 'react-hook-form';
import ClientDashboard from './ClientDashboard';
import './Customer.css';


const AddReview = () => {
    
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
     console.log(data)
   fetch('https://floating-mesa-43526.herokuapp.com/addReview', {
       method: 'POST',
       headers: { 'content-type': 'application/json' },
       body: JSON.stringify(data)
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
            <h5 className=" order-text">Review</h5>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
            <input type="text"
              className="form-control"
              ref={register({ required: true })} 
              name="name"
              placeholder="Your name"
            />
              {errors.name && <span className="text-danger">This field is required</span>} 
            </div>

          <br/>
          <div className="form-group">
              <input type="text"
                className="form-control"
                name="designation"
                ref={register({ required: true })} 
                placeholder="Company's Name and Designation"
              />
            {errors.name && <span className="text-danger">This field is required</span>}      
          </div>  

          <br/>
          <div className="form-group">
              <input type="text"
                className="form-control"
                name="review"
                ref={register({ required: true })} 
                placeholder="Description"
                
              />
            {errors.name && <span className="text-danger">This field is required</span>}
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

export default AddReview;