import React, { Component } from 'react';
import SimpleButton from './SimpleButton';
import './settings.css';

/*This file is for the Settings component for Covalent
@Catherine*/

class Settings extends Component {
    copyCodeToClipboard = () => {
        /* 
        There might be a better way to do this without refreshing the page. Let's look into it later.
        Also, when we figure that out, let's make it so the text changes on the button to say "Copied!" or something
        */
        const link = this.textArea
        link.select()
        document.execCommand("copy")
    }

    // These functions add the <body> styles for the settings only when the settings component is active.
    // (To do this, I put those CSS styles as a class instead)

    componentWillMount() {
        document.body.classList.add("Settings-background");
    }

    componentWillUnmount() {
        document.body.classList.remove("Settings-background");
    }

    render() {
        return (<div>
            <h1>Instructions</h1>
            <p>In 2 Truths &#38; A Lie, you say (or in this case, type) 3 statements about yourself, 2 of which should be truths and 1 of which should be a lie. However, other players do not know which statement is a lie! Their objective is to guess which one is the lie, and your objective is to make them choose the wrong statement as the lie, so make the truths as interesting as possible!</p>
            <p>As the host, write any additional instructions for all your teammates' introduction videos and choose the settings for your game below:</p>
            <form id="settings-form">
                <b><label for="time">Time Limit (30-300s): </label></b>
                <input class="settings-input" type="number" min="30" max="300" step="30" defaultValue="30"/>
                <b><label for="players">Player Count (2-50): </label></b>
                <input class="settings-input" type="number" min="2" max="50" defaultValue="2"/>
                <b><label for="rounds">Number of Rounds (1-10): </label></b>
                <input class="settings-input" type="number" min="1" max="10" defaultValue="1"/>
                <br></br>
                <b><label for="instructions">Instructions For Players:</label></b>
                <br></br>
                {/* Added a placeholder field for the instructions, feel free to change the contents */}
                <textarea id="instructions" name="instructions" rows="4" cols="50" placeholder="What do you want to tell your players?">
                </textarea>
                <br></br>
                <b><label>Code:
          <input class="settings-input" type="text" value="ABCDEF" id="code" />
                </label></b>
                <b><label>Link:
          <input ref={(textarea) => this.textArea = textarea} class="settings-input" type="text" value="covalent.app/join/abcdef" id="link" /> {/* ABCDEF and link are placeholder values*/}
                </label></b>
                <button class="settings-button" onClick={() => this.copyCodeToClipboard()}><b>COPY LINK</b></button>
                <br></br>
                <SimpleButton name="START" type="join" onClick=""></SimpleButton>
            </form>
        </div>
        );
    }
}

export default Settings;
