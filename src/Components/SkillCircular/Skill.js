import React, { Component } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import SkillStyles from './Skill-style.css';

export default class Skill extends Component {
  render(props) {
    const percentage = 66;
    return (
        <div className="Skill-Container">
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
