import React, { Component } from "react";
import MenuLogo from "./../logo.svg";
import "./Menu.css";
import SlideAnim from "./SlideAnim";
import SimpleButton from "./SimpleButton";
import JoinOptions from "./JoinOptions";

//This file is for the Game Selection/Menu/Homepage for Covalent
//@Michael

class Menu extends Component {
    constructor(props) {
        super(props);
        this.join = React.createRef();
        this.host = React.createRef();
    }

    componentWillMount() {
        document.body.classList.add("Menu-background");
    }

    componentWillUnmount() {
        document.body.classList.remove("Menu-background");
    }

    handleJoinClick = (e) => {
        this.join.current.displayContent(e);
    };

    handleHostClick = () => {};

    render() {
        return (
            <div className="Menu">
                <div className="Menu-body">
                    <div className="white">
                        <img
                            src={MenuLogo}
                            className="logo-img"
                            alt="Covalent Logo"
                        ></img>
                        <p className="logo-text">COVALENT</p>
                    </div>
                    <div className="Menu-buttons">
                        <div className="default-button">
                            <SimpleButton
                                name="JOIN"
                                type="join"
                                onClick={() => this.handleJoinClick}
                            ></SimpleButton>
                        </div>
                        <div className="join-options">
                        <SlideAnim ref={this.join}>
                            <JoinOptions />
                        </SlideAnim></div>
                        <div className="default-button">
                            <SimpleButton
                                name="HOST"
                                type="host"
                                onClick={() => this.handleHostClick}
                            ></SimpleButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
