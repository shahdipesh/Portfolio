import React, { Component } from 'react';
import ProjectsStyles from './projectStyles.css';
import Typography from '@mui/material/Typography';
import Project from '../Project/Project';
import IconButton from '@mui/material/IconButton';
import StartIcon from '@mui/icons-material/Start';


class Projects extends Component {
 render() {

    this.state = {
        projects: [
            {name:'Movie-Review App',description:'A movie review app that allows users to register and add reviews to movies. The front-end for the website is uses ReactJs and the backend is created using SpringBoot. Please refer to movie_review_backend as well for full working application',image:'https://mui.com/static/images/cards/contemplative-reptile.jpg',link:'https://github.com/shahdipesh/movie_review_frontend'},
            {name:'E-Commerce App',description:'An e-commerce Shopping app that allows users to add clothing items to cart. This website uses ReactJs in composition with React-Redux to manage the state of the application',image:'https://github.com/shahdipesh/Shopping_App/blob/main/Screen%20Shot%202022-10-12%20at%202.24.45%20PM.png?raw=true',link:'https://github.com/shahdipesh/Shopping_App'},
            {name:'HuffMan Encoder',description:'A simple encoder that uses HuffMan algorithm to encode each bits of a String to achieve loseless compression. This project takes advantage of OOPS in JavaScript. Please refer to huffman_encoder_backend for full application ',image:'https://github.com/shahdipesh/huffman_encoder_frontend/blob/master/Screen%20Shot%202022-10-12%20at%202.46.23%20PM.png?raw=true',link:'https://github.com/shahdipesh/huffman_encoder_frontend'},
            {name:'Todo App',description:"A todo app that allows users to add tasks and mark them as completed. This application also used Googles' Login api to create an user and store the user info in Firebase database.",image:'https://github.com/shahdipesh/React-Redux_Todo/blob/master/Screen%20Shot%202022-10-12%20at%202.16.38%20PM.png?raw=true',link:'https://github.com/shahdipesh/React-Redux_Todo'},
            {name:'Covid-19 Tracker',description:'A covid-19 tracker that allows users to search for covid-19 stats of a particular country. This app uses free Covid stats api to fetch data using ExpressJs and then displays it to user',image:'https://github.com/shahdipesh/covid_tracker/raw/master/tracker2.png',link:'https://github.com/shahdipesh/covid_tracker'},
            {name:'SpringBoot Security',description:'A simple SpringBoot app that implements jwt tokens to protect api. You can find a SpringBoot app which implements OAUTH at my github repository',image:'https://www.bezkoder.com/wp-content/uploads/2019/10/spring-boot-authentication-jwt-spring-security-feature-image.png',link:'https://github.com/shahdipesh/SpringBootSecurity'},
        ]
    }
    
   return (
     <div className="Projects-Container">
         <div className="Projects-Text">
                <Typography variant="h3" sx={{color:'white',marginTop:'20px'}}>Projects</Typography>
         </div>
         <div className="Projects-List">
                
                   {this.state.projects.map((proj,index) => {
                          return <Project name={proj.name} description={proj.description} image={proj.image} link={proj.link}/>;
                         
                        
                   })
                    
                
                }
               
               <a className="nextIcon" href="https://github.com/shahdipesh">
               <IconButton aria-label="delete">
                    <StartIcon fontSize={'large'}/>
                      <Typography variant="h6">View All Projects</Typography>
                </IconButton>
                </a>
         </div>
         

     </div>
   )
 }
}

export default Projects;