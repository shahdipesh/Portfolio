import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../Project/Project-Style.css';
import 'intersection-observer'
import { withIsVisible } from 'react-is-visible'
import IsVisible from 'react-is-visible'
class Certificate extends Component {
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
       
      </div>
    )
  }
}

export default withIsVisible(Certificate)