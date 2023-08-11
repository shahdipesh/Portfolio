import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar';
import Intro from '../Introduction/Intro';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Certificates from '../Certificates/Certificates';
import ContactForm from '../Contact/ContactForm';
import Advait from '../Advait/Advait';
import './Container.css';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdwaitChutiya: false
        }
    }

    setAdwaitChutiya = () => {
        this.setState({ isAdwaitChutiya: true })
    }

    render() {
        return (
            <div>
                {this.state.isAdwaitChutiya ?(<div><NavBar /><Intro /><Skills /><Projects /><Certificates /><ContactForm /></div>) : <Advait fnRef={this.setAdwaitChutiya}/>}
            </div>
        )
    }
}
