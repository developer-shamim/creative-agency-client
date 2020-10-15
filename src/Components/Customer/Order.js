import React from 'react';
import './Customer.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import ClientDashboard from './ClientDashboard';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '40ch',
      },
    },
  }));

const Order = () => {
   
    const classes = useStyles();
    
    const handleAddEvent = () => {
        fetch ('http://localhost:4000/register', {
            method:'POST',
            headers: {'Content-Type': 'application/json'
        },
        body: JSON.stringify()
        })
    } 
    return (
        <div>
        <div>
             <ClientDashboard></ClientDashboard>
         </div>
    <div className="create-event">
      <h5 className=" order-text">Place Order</h5>
      <form className={classes.root} noValidate autoComplete="off">
          <div>
      <TextField
        id="outlined-multiline-flexible"
        label="Name"
        multiline
        rowsMax={4}
        placeholder="Your name / Company's name"
        variant="outlined"
      />
      <br/>
      <TextField
        id="outlined-multiline-flexible"
        label="Email"
        multiline
        rowsMax={4}
        placeholder="Your email address"
        variant="outlined"
      />
      <br/>
      <TextField
        id="outlined-multiline-flexible"
        label="Service"
        multiline
        rowsMax={4}
        placeholder="Graphic Design"
        variant="outlined"
      />
                  
      <br/>
      <TextField
        id="outlined-multiline-static"
        label="Details"
        multiline
        rows={4}
        placeholder="Project Details"
        variant="outlined"
      />

<br/>
      <TextField
        id="outlined-multiline-flexible"
        label="Price"
        multiline
        rowsMax={4}
        placeholder="Price"
        variant="outlined"
      />
                  
    </div>
    <div className="event-btn">
        <Button variant="contained" className="event-btn" color="primary" onClick={handleAddEvent} > Send </Button>
    </div>
    <div className="upload-btn">
        <Button variant="contained" className="event-btn" color="" onClick={handleAddEvent} > Upload project file </Button>
    </div>
      </form>
  </div>
  </div>

    );
};

export default Order;