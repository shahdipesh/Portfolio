import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Project-Style.css';
import 'intersection-observer'
import { withIsVisible } from 'react-is-visible'
import IsVisible from 'react-is-visible'
class Project extends Component {
  constructor(props) {
    super(props);
    this.state={
      visibility: false
    }
  }
 
  render(props) {
    const { isVisible } = this.props
    this.handleVisibilityChange = () => {
      this.setState({visibility: true})
  
  }
  const style={
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(1  0px)',
    transition: 'all 1s linear'


  }
    return (
      <div className="container" style={style}>
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

export default withIsVisible(Project)