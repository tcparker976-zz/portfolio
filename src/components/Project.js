import React from 'react';

const Project = ({ project, index, description, elaboration }) => {
    if (index % 2 === 0) {
        return (
            <div className='project'>
                <div className='project-video'>
                <h3>{`${project}!`}</h3>   
                    <video autoPlay='autoplay' muted='true' onClick={this.play()} preload='none' loop width='600'>
                        <source src={`/assets/projects/${project}_demo.mp4`} type="video/mp4"></source>
                    </video>
                </div>
                <div className='project-about'> 
                    <h4>{description}</h4>
                    <p>{elaboration}</p>
                </div>
            </div>);
    } else {
        return (
            <div className='project'>
                <div className='project-about'>
                    <h4>{description}</h4>
                    <p>{elaboration}</p>
                </div>
                <div className='project-video'>
                <h3>{`${project}!`}</h3>   
                    <video autoPlay='autoplay' muted='true' onClick={this.play()} preload='none' loop width='600'>
                        <source src={`/assets/projects/${project}_demo.mp4`} type="video/mp4"></source>
                    </video>
                </div>
            </div>);
    }
}

export default Project;