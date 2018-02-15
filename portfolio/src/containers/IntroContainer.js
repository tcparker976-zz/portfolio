import React, { Component } from 'react';
import Title from '../components/Title.js';
import LetterL from '../components/letters/LetterL';
import LetterE from '../components/letters/LetterE';

class IntroContainer extends Component {
  render() {
    return (
      <div className='intro-container'>
        <Title />
          <div className='background'></div>
          <div className='word word-design'>
            <LetterL />
            <LetterE />
          </div>
      </div>
    );
  }
}

export default IntroContainer;
