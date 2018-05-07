import React, { Component } from 'react';

class NavContainer extends Component {
  
  handleAboutMeClick() {
    document.querySelector('.about-text-container').scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'nearest'
    });
  }

  handleProjectsClick() {
    document.querySelector('.projects-container').scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'nearest'
    });
  }

  render() {
    return (
      <div className='nav-container'>
        <ul className='nav-bar'>
          <li><button onClick={this.handleAboutMeClick.bind(this)}>About Me!</button></li>
          <li><button onClick={this.handleProjectsClick.bind(this)}>Projects!</button></li>
          <li>
            <button>
              <a href='https://docs.google.com/document/d/1NfBToVZoC5FtWD_RWVcW0AMDYcU8QDOKVp2LAgoCZTA/edit?usp=sharing'>Resume!</a>
            </button>
          </li>      
          <li><a href='mailto:parkerthomas976@gmail.com'>Contact!</a></li>
        </ul>
      </div>
    );
  }
}

export default NavContainer;
