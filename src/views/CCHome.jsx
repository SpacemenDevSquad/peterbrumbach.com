import React, { useEffect } from 'react';

// Components
import Footer from '../components/footer.jsx';

// CSS
import '../css/themes/ChristmasCrash.css'
import '../css/global/snow.css'

// Javascript
import snowMain from '../js/snow.js';

// Assets
import favicon from '../assets/images/ChristmasCrash/Christmas Crash Icon.jpg';
import BackHills from '../assets/images/ChristmasCrash/BackHills.png';
import Icon from '../assets/images/ChristmasCrash/Christmas Crash Icon.jpg'
import promoVideo from '../assets/videos/Christmas Crasher.mp4'

const CCHome = () => {

    useEffect(() => {
        snowMain();

        // Document title & favicon
        const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.rel = "icon";
        link.href = favicon;
        document.head.appendChild(link);
        document.title = "Christmas Crash";
    })

    return (
    <>
        <div id="image">
		<img id="logo" src={Icon}/>
        </div>
        <img id="background" src={BackHills}/>
        <h1>Christmas Crash</h1>
        <div id="description">
            <video id="descVideo" autoPlay muted>
                <source src={promoVideo} type="video/mp4"/>
            </video>
            <p id="descCenter">
                This was the first app that I ever made during my junior year in high school.
                Using the old Xcode storyboards and later moving to SwiftUI, making this app
                taught me the fundamentals of how to arrange UI elements with varying screen width/height.
                Recently, I managed to remaster it and have it published on the app store! It is now
                avalible to download for iOS 15+<br/>
                <a id="link" href="https://apps.apple.com/us/app/christmas-crasher/id6469570877">View on App Store</a>
            </p>
        </div>
        <Footer/>
    </>
    );
}

export default CCHome;