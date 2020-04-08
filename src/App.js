import React from 'react';
import './App.css';
import Background from './assets/background.jpeg'
import Header from './components/header/Header';
import About from './components/about/About';
import Description from './components/description/Description';
import Resume from './components/resume/Resume';
import Services from './components/services/Services';
import Expertise from './components/expertise/Expertise';
import Projects from './components/projects/Projects';
import Passions from './components/passions/Passions';
import { Element } from 'react-scroll';

function App() {
  return (
    <div style={{ backgroundColor: 'rgba(189,189,189,0.3)' }}>
      <Header />
      <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', opacity: 1, width: '100%', height: '350px' }}></div>
      <div className="ultils-container">
        <Element name="about">
          <About />
        </Element>
        <Description />
        <div className="all-container">
          <Element name="resume">
            <Resume />
          </Element>
          <Element name="services">
            <Services />
          </Element>
          <Element name="expertise">
            <Expertise />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="passions">
            <Passions />
          </Element>
        </div>
      </div>
    </div>
  );
}

export default App;
