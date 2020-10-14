import React from 'react';
import './Admin.css'
import AdminDashboard from './AdminDashboard';

const ServiceListing = () => {
    return (
        <div >
           <div>
               <AdminDashboard></AdminDashboard>
           </div>
           <div className="table-area">
           
            <p className="title-head mb-5"> Services List</p>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email ID</th>
                    <th>Service</th>
                    <th>Project Details</th>
                    <th>Status</th>
                </tr>
                 
                <tr>
                
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
            </table>
           </div>
            

        </div>
    );
};


export default ServiceListing;