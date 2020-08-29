import React, { Component } from 'react';
import './buttons.css';

class SimpleButton extends Component {
    render() {
        return (
            <button className={"simpleButton " + this.props.type} onClick={() => alert(this.props.alert)}>
                {this.props.name}
            </button>
        );
    }
}

export default SimpleButton;