
import * as React from 'react';
import Button from '@mui/material/Button';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Intro from './Components/Introduction/Intro';
import Skills from './Components/Skills/Skills';
import 'react-circular-progressbar/dist/styles.css';
import ContactForm from './Components/Contact/ContactForm';
import Projects from './Components/Projects/Projects';


function App() {
  return (
    <div className="App">

     <NavBar />
     <Intro />
     <Skills />
     <Projects />
     <ContactForm />
    </div>
  );
}

export default App;
