
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AdminDashboard from './AdminDashboard';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const AddAdmin = () => {
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
        <div >
            <div>
             <AdminDashboard></AdminDashboard>
            </div>
        <div className="create-event">
        <form className={classes.root} noValidate autoComplete="off">
          <div >
            <TextField
                id="outlined-multiline-flexible"
                label="Email"
                multiline
                rowsMax={4}
                placeholder="Add admin's email"
                variant="outlined"
            />
                        
            <br/>
        </div>
            <div className="event-btn">
                <Button variant="contained" className="event-btn" color="primary" onClick={handleAddEvent} > Submit </Button>
            </div>
        </form>


        </div>
        
    
        </div>
    );
};

export default AddAdmin;