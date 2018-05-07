import React from 'react';
import NavContainer from './containers/NavContainer';
import IntroContainer from './containers/IntroContainer';
import AboutContainer from './containers/AboutContainer';
import TechContainer from './containers/TechContainer';
import ProjectsContainer from './containers/ProjectsContainer';

const App = () => (
  <div className="App">
    <NavContainer />
    <div className='text-bubble-wrapper'>
      <IntroContainer />
    </div>
    <AboutContainer />
    <TechContainer />
    <ProjectsContainer />
    <NavContainer />
  </div>
)

export default App;
