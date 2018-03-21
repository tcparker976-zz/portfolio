import React, { Component } from 'react';
import Title from '../components/Title.js';
// import LetterL from '../components/letters/LetterL';
// import LetterE from '../components/letters/LetterE';

class IntroContainer extends Component {
  render() {
    return (
      <div className="intro-container">
        <img src="/assets/simple_bomb.png" alt="Boom!" width="500"></img>
        <Title />
      </div>
    );
  }
}

export default IntroContainer;
