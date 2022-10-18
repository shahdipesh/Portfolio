import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import './ContactFormStyle.css';
import Button from '@mui/material/Button';
import {sendEmail} from './SendEmail.js';
import Snackbar from '@mui/material/Snackbar';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      successMsg: 'Your message has been sent successfully',
      displaySuccessMsg: false
    }
  }
 render() {



  this.handleFormSubmit = async(e) => {
    if(this.state.name === '' || this.state.email === '' || this.state.message === ''){
      alert('Please fill all the fields');
      return;
    }
    sendEmail(templateParams);
    this.setState({displaySuccessMsg:true});
    //clear the states
    this.setState({name:''});
    this.setState({email:''});
    this.setState({message:''});

  }


var templateParams = {
  to_name: 'Dipesh',
  from_name: this.state.name,
  sender_email: this.state.email,
  message: this.state.message
};


  this.handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  
   return (
     <React.Fragment>
 <Snackbar
        open={this.state.displaySuccessMsg}
        autoHideDuration={6000}
        onClose={()=>this.setState({displaySuccessMsg: false})}
        message={this.state.successMsg}
      />
      <div className="form-container">

      <div className="contact"> 

        <Typography variant="h3"  gutterBottom>
          Contact Me
        </Typography>

      </div>

      <div className="contact-form" id="contact"> 
      
        <TextField
              required
              id="outlined-required"
              label="Name"
              fullWidth
              name="name"
              onChange={(event)=>this.handleChange(event)}
              variant="standard"
             
            />
             <TextField
              required
              id="outlined-required"
              label="Email"
              name="email"
              onChange={(event)=>this.handleChange(event)}
              fullWidth
              variant="standard"
              type="email"
            
            />
             <TextField
              required
              variant="outlined"
              id="outlined-required"
              label="Message"
              onChange={(event)=>this.handleChange(event)}
              multiline
              rows={12}
              name="message"
              fullWidth
            />
            <div className="formbtnContainer" >
                <Button sx={{width:'100px'}} variant="contained" color="primary" onClick={()=>this.handleFormSubmit(this.state)} >
                  Submit
          </Button>
            </div>
          
        </div>

        </div>

        
        
      </React.Fragment>
   )
 }
}

export default ContactForm;