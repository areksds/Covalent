import React, { Component } from 'react';
import './buttons.css';

class SimpleButton extends Component {

    render() {
        return (
         <div href={this.props.url} className={"simpleButton " + this.props.color}>{this.props.name}</div>
        );
    }
}

export default SimpleButton;