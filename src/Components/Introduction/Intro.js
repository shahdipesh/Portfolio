import React, { Component } from 'react'
import IntroStyles from './Intro-style.css'
import Typography from '@mui/material/Typography';
import pp from '../../person-transparent-background-7.png'
import TextTransition, { presets } from "react-text-transition";
import ReactTextTransition  from "react-text-transition";


export default class Intro extends Component {

  //Constructor
  constructor(props) {
    super(props);
    this.state={
      greetings:["Hello!","Namaste!","Bonjour!","Salam!"],
      index:0,
      size:4
    }
    this.changeText();
  }

  
  changeText() {
      setInterval(()=>{this.setState(prevstate => ({ index: (this.state.index + 1)%this.state.size}))},4000);
   
  }


  
  
  render() {
  
    return (
    <React.Fragment>
    <div className="Container">
      
      <div className="IntroText">
        <div className="Greetings">
          <ReactTextTransition className="greetingTexts" delay={"1.5s"} springConfig={presets.gentle}>
          
            <Typography  variant="h3">{this.state.greetings[this.state.index]}</Typography><br />
          </ReactTextTransition>
            <p className="myName" > I am Dipesh. <br /> </p>
        </div>
        <p className="intro-text">  I am currently seeking an internship or Full-time Position to gain more experience and knowledge.<br></br>I am excited to continue learning and growing as a developer, and am eager to take on new challenges and opportunities in the field.</p>

      </div>
      <div className="profile-pic-container">
          <img className="profile-pic" src={"https://i.ibb.co/yQHf386/pp.jpg"} alt="profile-pic" />
            
       </div>

     </div>

      
    </React.Fragment>
    )
  }
}
