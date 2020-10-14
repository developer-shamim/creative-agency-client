import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import AdminDashboard from './AdminDashboard';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


const AddService = () => {
   
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
             <AdminDashboard></AdminDashboard>
         </div>
    <div className="create-event">
      
      <form className={classes.root} noValidate autoComplete="off">
          <div>
      <TextField
        id="outlined-multiline-flexible"
        label="Service Title"
        multiline
        rowsMax={4}
        placeholder="Enter event title"
        variant="outlined"
      />
                  
      <br/>
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        placeholder="Enter description"
        variant="outlined"
      />
    </div>
    <div className="event-btn">
        <Button variant="contained" className="event-btn" color="primary" onClick={handleAddEvent} > Submit </Button>
    </div>
    <div className="upload-btn">
        <Button variant="contained" className="event-btn" color="" onClick={handleAddEvent} > Upload Icon </Button>
    </div>
      </form>
  </div>
  </div>

    );
};

export default AddService;