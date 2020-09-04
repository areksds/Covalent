import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

//I wanted to make a separate component for buttons with slide animations so it wouldn't clutter up the code as much
//Couldn't figure out a way to make each of the margins editable from declaration so I was forced to make presets
//in order to make everything work.
//@Michael

class SlideAnim extends Component {
    state = {
        content: false,
    };

    click = false;

    displayContent(e) {
        e.preventDefault();
        this.click = true;
        this.setState({ content: !this.state.content });
    };

    render() {
        let thisMarginTop = -100;
        let thisMarginBottom = 0;
        let thisOpacity = 1;
        let thisDuration = 300;

        if (this.props.type === "join") {
            thisMarginTop = -100;
            thisDuration = 300;
        }
        if (this.props.type === "host") {
            //gamemenu
        }
        return (
            <div className="container">
                {/*<div className="button-container">
                    <SimpleButton
                        name={this.props.name}
                        type={this.props.type}
                        onClick={() => this.displayContent}
                    ></SimpleButton>
        </div>*/}
                {!this.click ? (
                    <div></div>
                ) : !this.state.content ? (
                    <Spring
                        from={{
                            marginTop: 0,
                            marginBottom: 0,
                            opacity: 1,
                        }}
                        to={{
                            marginTop: thisMarginTop,
                            marginBottom: thisMarginBottom,
                            opacity: thisOpacity,
                        }}
                        config={{ duration: thisDuration }}
                    >
                        {(props) => (
                            <div style={props}>{this.props.children}</div>
                        )}
                    </Spring>
                ) : (
                    <Spring
                        from={{
                            marginTop: thisMarginTop,
                            marginBottom: thisMarginBottom,
                            opacity: thisOpacity,
                        }}
                        to={{
                            marginTop: 0,
                            marginBottom: 0,
                            opacity: 1,
                        }}
                        config={{ duration: thisDuration }}
                    >
                        {(props) => (
                            <div style={props}>{this.props.children}</div>
                        )}
                    </Spring>
                )}
            </div>
        );
    }
}

export default SlideAnim;
