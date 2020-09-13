import React, { Component } from "react";
import Logo from "./../logo.svg";
import "./Menu.css";
import SlideAnim from "./SlideAnim";
import SimpleButton from "./SimpleButton";
import JoinOptions from "./JoinOptions";
import { NavLink } from "react-router-dom";

//This file is for the Game Selection/Menu/Homepage for Covalent
//@Michael

class Menu extends Component {
    constructor(props) {
        super(props);
        this.join = React.createRef();
        this.host = React.createRef();
        this.overlay = React.createRef();
    }

    componentWillMount() {
        document.body.classList.add("Menu-background");
    }
    
    /*
    componentWillUnmount() {
        document.body.classList.remove("Menu-background");
    }*/

    handleJoinClick = (event) => {
        this.join.current.handleSubmit(event); //change to interact with backend to bring to join-instructions page
    };

    handleHostClick = () => {
        this.props.history.push('/host');
    }

    render() {
        return (
            <div className="Menu">
                <div className="Menu-body">
                    {/*<div className="white">*/}
                    <img
                        src={Logo}
                        className="logo-img"
                        alt="Covalent Logo"
                    ></img>
                    <p className="logo-text">COVALENT</p>
                    {/*</div> div no longer needed without join button animation*/}
                    <div className="Menu-buttons">
                        <div className="join-options">
                            <JoinOptions ref={this.join} />
                        </div>
                        <div className="default-button">
                            <SimpleButton
                                name="JOIN"
                                type="join"
                                onClick={this.handleJoinClick}
                            ></SimpleButton>
                        </div>
                        <div className="default-button">
                            <SimpleButton
                                name="HOST"
                                type="host"
                                onClick={this.handleHostClick}
                            ></SimpleButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
