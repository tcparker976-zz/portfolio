import React, { Component } from 'react';
import Project from '../components/Project.js';

class ProjectsContainer extends Component {
    constructor() {
        super();
        this.state = {
            projects: ['chattermon', 'marsklif', 'namin'],
            descriptions: [       
                'A Pokémon battle simulator, with integrated chat!', 
                'Analysis and box office data on over 18,000 movies!', 
                'Determines the likely ethnic origin of any name!'
            ],
            elaborations: [
                'Provides users the ability to chat with their friends for the duration of a small battle simulation. Built with React, Express on NodeJS, Socket.io, PassportJS, and PostgreSQL with Sequalize.',
                'Delivers a brief movie summary, box office ranking, twitter reactions, and links to the searched movie on other aggregator sites. Built with Redux/React, React-Router, Express on NodeJS, and MongoDB.',
                'Information on a fullname is cached on search, and a brief description of the country of origin with geographical location via google maps API is displayed. Built with React, Bootstrap, NodeJS, and MySQL.'
            ]
        }
    }

    render() {
        return (

        <div className='projects-container'>
            <div className='projects-title-container'>
                <img alt='black thunder bolt!' src='/assets/black_thunder_arrow.png'></img>
                <div className='projects-title'>
                    <h1>Projects!</h1>
                    <h2>Wow!</h2>
                </div>
                <img alt='black thunder bolt!' src='/assets/black_thunder_arrow.png'></img>
            </div>
            <div className='projects-description-container'>
                {
                    this.state.projects.map((project, index) => {
                        return (
                            <Project 
                                key={index}
                                index={index}
                                project={project} 
                                description={this.state.descriptions[index]} 
                                elaboration={this.state.elaborations[index]}
                            />
                        );
                    })
                }   
            </div>
        </div>);
    }
}

export default ProjectsContainer;