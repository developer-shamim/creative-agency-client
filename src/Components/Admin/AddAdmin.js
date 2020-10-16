
import React from 'react';
import AdminDashboard from './AdminDashboard';
import { useForm } from 'react-hook-form';



const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
     console.log(data)
   fetch('https://floating-mesa-43526.herokuapp.com/addAdmin', {
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
        <div >
            <div>
             <AdminDashboard></AdminDashboard>
            </div>
            <div className="create-event">
            <h5 className=" order-text">Create Admin</h5>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                <input type="email"
                className="form-control"
                ref={register({ required: true })} 
                name="email"
                placeholder="Admin's Email"
                />
                {errors.name && <span className="text-danger">This field is required</span>} 
                </div>

                <div>
                    <button  type="submit" className="btn btn-dark"> Submit </button>
                </div>
          </form>


        </div>
        
    
        </div>
    );
};

export default AddAdmin;