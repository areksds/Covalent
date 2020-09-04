import React, { Component } from "react";
import './JoinOptions.css';

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
        alert("A code was submitted: " + this.state.value); //eventually link this properly
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
                                className="code-input"
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <button onClick={this.handleSubmit}>START</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default JoinOptions;