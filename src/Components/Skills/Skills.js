import React, { Component } from 'react';
import SkillsStyles from './Skills-style.css';
import Typography from '@mui/material/Typography';
import Skill from '../SkillCircular/Skill';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


class Skills extends Component {
 render() {

    this.state = {
        skills: ['Java','Java Script','ReactJs','ExpressJs','Databases','C','C++','SpringBoot'],
        values: [70,60,60,50,70,60,60,50],
        myExperience:['7/10','6/10','6/10','5/10','7/10','6/10','6/10','5/10']
    }
    
   return (
     <div className="Skills-Container">
         <div className="Skills-Text">
                <Typography variant="h3" sx={{color:'orange',marginTop:'20px'}}>Skills</Typography>
         </div>
         <div className="Skills-List">
                
                   {this.state.skills.map((skill,index) => {
                          return <Skill text={skill} value={this.state.values[index] } myExperience={this.state.myExperience[index]}
                         
                          />
                   })
                    
                
                }

             
         </div>
         

     </div>
   )
 }
}

export default Skills;