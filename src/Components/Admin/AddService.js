import React, { useState } from 'react';
import AdminDashboard from './AdminDashboard';
import './Admin.css'
// import { useForm } from 'react-hook-form';


const AddService = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  // const { register, errors } = useForm();

  const handleBlur = e => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
}

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
}

const handleSubmit = () => {
  const formData = new FormData()
  console.log(info);
  formData.append('file', file);
  formData.append('service', info.service);
  formData.append('details', info.details);

  fetch('https://floating-mesa-43526.herokuapp.com/addService', {
      method: 'POST',
      body: formData
  })
      .then(response => response.json())
      .then(data => {
          console.log(data)
      })
      .catch(error => {
          console.error(error)
      })
}
    return (
        <div>
        <div>
             <AdminDashboard></AdminDashboard>
         </div>
         <div className="create-event">
          <h5 className=" order-text">Place Order</h5>

        <div classname="form-area w-75 align-items-center">
        <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col form-group">
                <input type="text"
                  onBlur={handleBlur}
                  className="form-control"
                  name="service"
                  // ref={register({ required: true })} 
                  placeholder="Service title"
                />
              {/* {errors.name && <span className="text-danger">This field is required</span>}       */}
          </div>  

          <div className=" col alert alert-primary" role="alert" >
              <input onChange={handleFileChange} type="file" className="form-control-file" id="exampleFormControlFile1" placeholder="Upload Icon"/>
          </div>

        </div>

          <br/>
          <div className="form-group">
              <textarea type="text"
                onBlur={handleBlur}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="details"
                // ref={register({ required: true })} 
                placeholder="Description"
                
              />
            {/* {errors.name && <span className="text-danger">This field is required</span>} */}
          </div>
          <br/>

          <div >
            <button  type="submit" className="btn btn-dark"> Submit </button>
          </div>

          </form>

        </div>
        
      </div>
  </div>

    );
};

export default AddService;