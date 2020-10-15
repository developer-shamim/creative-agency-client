import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import './App.css';
import Home from './Components/Home/Home/Home';
import AdminDashboard from './Components/Admin/AdminDashboard';
import Services from './Components/Home/Services/Services';
import Footer from './Components/Home/Footer/Footer';
import ServiceListing from './Components/Admin/ServiceListing';
import AddService from './Components/Admin/AddService';
import AddAdmin from './Components/Admin/AddAdmin';
import Order from './Components/Customer/Order';
import OrderStatus from './Components/Customer/OrderStatus';
import AddReview from './Components/Customer/AddReview';

export const UserContext = createContext();

function App() {
  const[loggedInUser, setLoggedInUser] = useState({})
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

        <Router>
          <Switch>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/service">
              <Services/>
            </Route>

            <Route path="/contact">
              <Footer/>
            </Route>

            <Route path="/login">
              <Login/>
            </Route>

            <Route path="/listing">
              <ServiceListing/>
            </Route>

            <Route path="/create">
              <AddService/>
            </Route>

            <Route path="/make">
              <AddAdmin/>
            </Route>


            <Route path="/status">
              <OrderStatus/>
            </Route>

            <Route path="/review">
              <AddReview/>
            </Route>
            
            <Route path="/order">
              <Order/>
            </Route>

            <Route path="/admin">
              <AdminDashboard/>
            </Route>
            

            <Route exact path="/">
              <Home />
            </Route>

          </Switch>
        </Router>

    </UserContext.Provider>
  );
}

export default App;
