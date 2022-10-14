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
      visibility: false
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
    return (
        <div className="Skill-Container" style={style}>
          {isVisible?this.handleVisibilityChange():null}
            <div>
            <CircularProgressbar className="CircularProgress" background="true" value={this.props.value} text={this.props.text} 
             styles={{ text: {
              // Text color
              fill: 'green',
              // Text size
              fontSize: '15px'

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
