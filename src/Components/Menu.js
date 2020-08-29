import React, { Component } from 'react';
import MenuLogo from './../logo.svg';
import './Menu.css';
import SimpleButton from './SimpleButton';

//This file is for the Game Selection/Menu/Homepage for Covalent
//@Michael

class Menu extends Component {
    render() {
        return (
            <div className="Menu">
            <div className="Menu-body">
                <img src={MenuLogo} className="logo-img" alt="Covalent Logo"></img>
                <p className="logo-text">COVALENT</p>
                <div className="Menu-buttons">
                    <SimpleButton name="JOIN" type="join"></SimpleButton>
                    <SimpleButton name="HOST" type="host"></SimpleButton>
                </div>
            </div>
            </div>
            
        );

    }
}

export default Menu;