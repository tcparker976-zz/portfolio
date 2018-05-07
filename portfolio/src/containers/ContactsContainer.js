import React, { Component } from 'react';
import Contact from '../components/Contact.js';

class ContactsContainer extends Component {
    constructor() {
        super();

        this.state = {
            images: ['linkedIn', 'github', 'mail'],
            links: [
                'https://www.linkedin.com/in/thomas-clifford-parker/',
                'https://github.com/tcparker976',
                'mailto:parkerthomas976@gmail.com'
            ]
        };
    }

    render() {
        return (
        <div className='contacts-container'>
            {
                this.state.images.map((image, index) => (
                    <Contact key={index} image={image} link={this.state.links[index]} />
                ))
            }
        </div>);
    }

}

export default ContactsContainer;