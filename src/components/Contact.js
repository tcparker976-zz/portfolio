import React from 'react';

const Contact = ({ image, link }) => (
    <a className='contact' href={link}>
      <img alt={image} src={`/assets/${image}_logo.png`}></img>
    </a>
)

export default Contact;