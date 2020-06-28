import React from 'react';
import TextLoop from 'react-text-loop';

function IndexHeading(props) {

    return (
        <div className="IndexHeading">
            <div className="firsttext mt-5">
                <h1 className="text-primary">Hi, I'm Irena.</h1>
                <p>I want to apply my human-centered thinking to solve your usability problems.
      I want to bring to you a modern user interface that meets your needs.</p>
            </div>
            <div className="textloop ml-5">
                I am a <TextLoop>
                    <span>product designer.</span>
                    <span>software developer.</span>
                    <span>product manager.</span>
                </TextLoop> who's been working on...
    </div>
        </div>
    );
}

export default IndexHeading;