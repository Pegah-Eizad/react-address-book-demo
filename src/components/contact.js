import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.
export default function Contact(props){
  return(
    <div className="contact">
        <img className="contact-photo">{props.photo} />
        <h1 className="contact-name">{props.name}</h1>
        <h1 className="contact-address">{props.address}</h1>
    </div
  );
};

Contact.defaultProps = {
  name: '';
  photo: '',
  address: ''
};
