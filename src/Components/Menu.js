import React, { Component } from 'react';
import MenuLogo from './../logo.svg';
import './Menu.css';
import SimpleButton from './SimpleButton';

//This file is for the Game Selection/Menu/Homepage for Covalent
//@Michael

class Menu extends Component {

    /* 

    componentWillMount and componentWillUnmount get called when a component is added and removed, respectively. 
    This component has some styles that change the body—but we don't want those changes for the whole app!
    So, we can use these functions to isolate those changes. I went ahead and removed the body styles and added these instead.
    When the component's added/removed, a CSS class (Menu-background) is added/removed from the body.
    
    */

    componentWillMount() {
        document.body.classList.add("Menu-background");
    }

    componentWillUnmount() {
        document.body.classList.remove("Menu-background");
    }

    render() {
        return (
            <div className="Menu">
            <div className="Menu-body">
                <img src={MenuLogo} className="logo-img" alt="Covalent Logo"></img>
                <p className="logo-text">COVALENT</p>
                <div className="Menu-buttons">
                    <SimpleButton name="JOIN" type="join" alert=""></SimpleButton>
                    {/* 
                    Comment from survey on mockup:
                    Add the join code field right before the button (instead of having to press it to show the field)
                    Let's make sure to add that before release!

                    Also: change alert to actual action once backend is added
                    */}
                    <SimpleButton name="HOST" type="host" alert=""></SimpleButton>
                </div>
            </div>
            </div>
            
        );

    }
}

export default Menu;