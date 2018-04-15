import React, { Component } from 'react';

class TechContainer extends Component {
    constructor() {
        super();
        this.state = {
            tech: ['JavaScript', 'HTML5', 'CSS3', 'Node', 'Express' , 'MongoDB', 'MySQL', 'React', 'Redux', 'Git']
        }
    }

    render() {
        return (
            <div className='tech-container'>
                <h2>Tech Favorites!</h2>
                <div className='logos-container'>
                    {
                        this.state.tech.map((oneTech) => {
                            return (
                              <div>  
                                <img alt={oneTech} src={`/assets/${oneTech}_logo.png`}></img>
                              </div>  
                            )
                        })
                    }
                </div>
                <h2 className='so-much-more'>...and so much more!</h2>
            </div>)
    }
}

export default TechContainer;