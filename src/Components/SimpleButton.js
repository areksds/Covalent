import React, { Component } from 'react';
import './buttons.css';

class SimpleButton extends Component {
    render() {
        return (
            <button className={"simpleButton " + this.props.type} onClick={this.props.onClick()}>
                {this.props.name}
            </button>
        );
    }
}

export default SimpleButton;