import React, { Component } from 'react';
import avatar from './../avatar.png';
import './avatar.css';

/*This file is for the Avatar component for Covalent
@Catherine*/

class Avatar extends Component {

    render() {
        return (
            <div><img src= {avatar} className="avatar-png" alt="avatar" />
            <h1 className = "name" >{this.props.name}</h1>
            </div>
            );
    }
}

export default Avatar;
