import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ClientDashboard from './ClientDashboard';
import './Customer.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '35ch',
      },
    },
  }));

const AddReview = () => {
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
            <h5 className=" order-text">Review</h5>
      <form className={classes.root} noValidate autoComplete="off">
          <div>
          <TextField
        id="outlined-multiline-flexible"
        label="Name"
        multiline
        rowsMax={4}
        placeholder="Your Name "
        variant="outlined"
      />
                  
      <br/>
      <TextField
        id="outlined-multiline-flexible"
        label="Designation"
        multiline
        rowsMax={4}
        placeholder="Designation, Company's Name "
        variant="outlined"
      />
                  
      <br/>
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        placeholder="Your review"
        variant="outlined"
      />
    </div>
    <div className="event-btn">
        <Button variant="contained" className="event-btn" color="primary" onClick={handleAddEvent} > Submit </Button>
    </div>
    
      </form>
  </div>

            
        </div>
    );
};

export default AddReview;