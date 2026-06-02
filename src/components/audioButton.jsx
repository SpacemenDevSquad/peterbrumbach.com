import React, { useEffect } from 'react';

// Javascript
import audioButtonMain from '../js/audioButton';

// CSS
import '../css/global/audioButton.css'

// Images
import volume1 from '../assets/images/volume/volume1.png'

const audioButton = (songPath) => {
    useEffect(() => {
        audioButtonMain(songPath.path);
    })

    return (
        <button id="musicButton">
		    <img src={volume1} className="buttonimg"/>
	    </button>
    );
}

export default audioButton;