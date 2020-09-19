import React, { Component } from 'react';
import VideoRecorder from 'react-video-recorder'
import './recorder.css';

import { uploadFile, getFile } from '../Reducer/functions';

/*

Known issues:
- Can't record on Safari (desktop)
- Can't play back on Safari unless WebM can be converted to mp4

Add:
- Add customizations for button and loading screen
- Render button that needs to be pressed to upload file
- Add props for all the places where there are individual IDs

*/

class GameVideoRecorder extends Component {
    render () {
        return (
            <div className="VideoContainer">
                <VideoRecorder
                isOnInitially={true}
                timeLimit={7000}
                onRecordingComplete={videoBlob => {
                    // REPLACE WITH ID PROP
                    // Render a button that needs to be pressed to upload file.
                    // uploadFile("c083e840-ed58-41d9-b652-4273cf8cb1d6.webm", videoBlob);
                }}
                />
            </div>
        )
    }
}

class GameVideoPlayback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
        };
    }
    
    componentDidMount() {
        // REPLACE WITH ID PROP
        getFile("c083e840-ed58-41d9-b652-4273cf8cb1d6.webm")
            .then(video => this.setState({file: video}));
    }

    render () {
        if (this.state.file) {
            return (
                <video width="640" height="480" autoPlay loop>
                    <source src={this.state.file} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video>
            )
        } else {
            return (
                <p>Loading...</p>
            )
        }

        


    }
}

export { GameVideoRecorder, GameVideoPlayback };