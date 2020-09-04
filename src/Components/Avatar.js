import React, { Component } from 'react';
import avatar from './../avatar.png'; // Note: let's change the default avatar image later
import './avatar.css';

/*This file is for the Avatar component for Covalent
@Catherine*/

class Avatar extends Component {

    render() {
        return (
            <div>
                {/* The code I added in the src attribute uses an OR operator (||). 
                If there's an avatar passed as a property, it uses it.
                Or, if there isn't, it defaults onto the loaded avatar image. */}
                <img src={this.props.img || avatar} className="avatar-png" alt="avatar" />
                <h1 className="name">{this.props.name}</h1>
            </div>
            );
    }
}

export default Avatar;
