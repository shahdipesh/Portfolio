import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Project-Style.css';

export default class Project extends Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <div className="container">
        <Card>
        <CardMedia
          component="img"
          height="200px"
          image={this.props.image}
          alt="green iguana"
          sx={{objectFit:'fill',objectPosition:'center'}}
        />
        <CardContent sx={{height:'20vh',minHeight:'20vh',overflow:'scroll'}}>
          <a href={this.props.link}>
          <Typography gutterBottom variant="h5" component="div" sx={{color:'rgb(196, 47, 92)'}}>
            {this.props.name} 
          </Typography>
          </a>
          <Typography variant="body2" color="text.secondary">
           {this.props.description}
          </Typography>
        </CardContent>
        
      </Card>

      </div>
    )
  }
}
