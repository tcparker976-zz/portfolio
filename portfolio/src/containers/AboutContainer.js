import React from 'react';
import About from '../components/About.js';
import ContactsContainer from './ContactsContainer.js';

const AboutContainer = () => (
    <div className="about-container"> 
      <div className='my-photo-container'>
        <img className='my-photo' src="/assets/HR-18.jpg" alt="Me" height="420"></img>
        <ContactsContainer />
      </div>
      <About />
    </div>
);

export default AboutContainer;