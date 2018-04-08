import React from 'react';
// import NavContainer from './containers/NavContainer';
import IntroContainer from './containers/IntroContainer';
import AboutContainer from './containers/AboutContainer';
import ProjectsContainer from './containers/ProjectsContainer';

const App = () => (
  <div className="App">
    <div className='text-bubble-wrapper'>
      <IntroContainer />
    </div>
    <AboutContainer />
    <ProjectsContainer />
  </div>
)

export default App;
