import React from 'react';
import logo from './logo.png';
import './Menu.css';
import SimpleButton from './Components/SimpleButton';

//This file is for the Game Selection/Menu/Homepage for Covalent
//@Michael

function Menu() {
    return (
        <body>
        <div className="Menu">
            <img src={logo} className="logo-img"></img>
            <p className="logo-text">COVALENT</p>
        </div>
        </body>
    );
}

export default Menu;