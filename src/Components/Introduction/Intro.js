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
          <ReactTextTransition className="greetingTexts" delay={"2s"} springConfig={presets.gentle}>
          
            <Typography  variant="h3">{this.state.greetings[this.state.index]}</Typography><br />
          </ReactTextTransition>
            <p className="myName" > I am Dipesh. <br /> </p>
        </div>
        <p> A fullStack developer and Certified Ethical Hacker. I am currently seeking an internship or full-time position in the industry in order to gain more experience and knowledge.</p>

      </div>
      <div className="profile-pic-container">
          <img className="profile-pic" src={"https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/107249649_2832814370332795_7721637612072046717_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HwrFmBFlbRkAX9qKMaL&tn=cw_RZ_tbcnQGeVHI&_nc_ht=scontent-ort2-2.xx&oh=00_AT9roZvUigxciNk-WkwbfHfRX5hig9K0-LS8qcbcnoSp8Q&oe=636CF15B"} alt="profile-pic" />
            
       </div>

     </div>

      
    </React.Fragment>
    )
  }
}
