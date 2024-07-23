import React from 'react';
import './BackgroundVideo.css'

function BackgroundVideo({backgroundVideo}){
    return(
        <>
            <div className="BackgroundVideo">
                <video src={backgroundVideo} autoPlay muted loop/>
            </div>
        </>
    );
}

export default BackgroundVideo;