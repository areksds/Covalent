import React, { Component } from "react";
import "./JoinOptions.css";

//eventually replace the press to start button with just the join button
//when we do that, leave this class as a separate component as it still takes in the input to share with backend

class JoinOptions extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.value.length !== 6) {
            alert("Please enter a valid 6-letter code.");
        } else {
            alert("A code was submitted: " + this.state.value); //eventually link this properly}
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label className="join-code-label">
                            CODE:
                            <input
                                placeholder="ABCDEF"
                                className="code-input"
                                type="text"
                                maxLength="6"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default JoinOptions;
