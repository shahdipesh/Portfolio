import React, { Component } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import SkillStyles from './Skill-style.css';
import 'intersection-observer'
import { withIsVisible } from 'react-is-visible'
import IsVisible from 'react-is-visible'

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state={
      visibility: false,
      hovered:false
    }
    
  }


  render(props) {
    const percentage = 66;
    const { isVisible } = this.props;

    const style={
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateX(0px)' : 'translateX(100px)',
      transition: 'all 1s linear',
  
    }
    this.handleVisibilityChange = () => {
      this.setState({visibility: true})
 
   }
   this.handleHover = (status) => {
      this.setState({hovered: status})

   }
    return (
        <div className="Skill-Container" style={style}>
          {isVisible?this.handleVisibilityChange():null}
            <div onMouseLeave={()=>this.handleHover(false)}   onMouseOver={()=>this.handleHover(true)}>
            <CircularProgressbar 
              className="CircularProgress"
              background="true" 
              value={this.props.value} 
            
              text={this.state.hovered?this.props.myExperience:this.props.text} 
              styles={{ text: {
                // Text color
                fill: !this.state.hovered?'green':'grey',
                // Text size
                fontSize: '15px',
                // if hovered then decrease font sizes
                fontSize: this.state.hovered?'18px':'15px'
                

              },
              background: {
                fill:'rgb(240, 236, 235)',
              },
              path: {
                // Path color
                stroke: `rgb(78, 131, 138)`,
              }
            }}
            />
            </div>
        </div>
    )
  }
}

export default withIsVisible(Skill)
