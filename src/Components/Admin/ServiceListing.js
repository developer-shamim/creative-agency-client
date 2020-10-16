import React, { useEffect, useState } from 'react';
import './Admin.css'
import AdminDashboard from './AdminDashboard';

const ServiceListing = () => {
    const [orders, setOrders] = useState([]);

useEffect(()=>{
    fetch('https://floating-mesa-43526.herokuapp.com/orderLists')
        .then(res => res.json())
        .then(data => setOrders(data))
    
},[])
    

    return (
        <div >
           <div>
               <AdminDashboard></AdminDashboard>
           </div>
           <div className="table-area">
           
            <p className="title-head mb-5"> Services List</p>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Service</th>
                    <th>Project Details</th>
                    <th>Status</th>
                </tr>
                </thead>

                <tbody>
                {
                  orders.map((order, index) => 
                <tr>
                
                    <td>{order.name}</td>
                    <td>{order.email} </td>
                    <td> {order.service} </td>
                     <td> {order.details}</td>
                    <td> 
                        <select class="form-control" id="exampleFormControlSelect1">
                        <option className="text-danger">Pending</option>
                        <option className="text-warning">In-Progress</option>
                        <option className="text-success">Completed</option>
                        </select>
                    </td>
                </tr>
                     )
                } 
                </tbody>
                
            </table>
           </div>
            

        </div>
    );
};


export default ServiceListing;