import React, { Component } from "react";
import "./GamesMenu.css";
import SimpleButton from "./SimpleButton";
import Logo from "./../logo.svg";
import { TimelineMax, Power1, Linear } from "gsap/all";


//remaining tasks for GamesMenu: add in the information + formatting for each of the individual games
//+ one issue: the games currently go OVER the "transparent" div - i want it to go under

class GamesMenu extends Component {
    constructor(props) {
        super(props);
        this.timeline = new TimelineMax({ paused: true });
        this.state = { width: window.innerWidth, height: window.innerHeight };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    animDistance() {
        return this.state.height * 0.9;
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);

        this.timeline
            .from(this.overlay, 0.2, {
                display: "none",
                autoAlpha: 0,
                ease: Linear.easeInOut,
            })
            .from(this.content, 0.3, {
                y: this.animDistance(),
                ease: Power1.easeInOut,
            });

        this.timeline.play();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    changePage = (e, destination) => {
        e.preventDefault();
        this.timeline.reverse();
        const timelineDuration = this.timeline.duration() * 1000;
        setTimeout(() => {
            this.props.history.push(destination);
        }, timelineDuration);
    };

    getGamesNumber() {
        return document.body.getElementsByClassName("game").length;
    }

    render() {
        return (
            <div className="games-menu-container">
                <div
                    className="overlay"
                    ref={(div) => (this.overlay = div)}
                    onClick={(e) => this.changePage(e, "/")}
                ></div>
                <div className="games-menu" ref={(div) => (this.content = div)}>
                    <header>
                        <div className="logo">
                            <img
                                src={Logo}
                                className="logo-img"
                                alt="Covalent Logo"
                            ></img>
                            <p>COVALENT</p>
                        </div>
                        <h1>FIND THE PERFECT ICEBREAKER FOR YOU!</h1>
                        <div className="exit">
                            <button onClick={(e) => this.changePage(e, "/")}>
                                Exit
                            </button>
                        </div>
                    </header>
                    <div className="games-background">
                        <div className="games-frame">
                        <div className="transparent"></div>
                            <div className="scrolling-wrapper">
                            <div className="games">
                                <div className="game" id="1"><div className="game-transparent">hi</div></div>
                                <div className="game" id="2"><div className="game-transparent">hi</div></div>
                                <div className="game" id="3"><div className="game-transparent">hi</div></div>
                                <div className="game" id="4"><div className="game-transparent">hi</div></div>
                                <div className="game" id="5"><div className="game-transparent">hi</div></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GamesMenu;
