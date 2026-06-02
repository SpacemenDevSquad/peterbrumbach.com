import React, { useEffect } from 'react';

// Components
import Footer from '../../components/footer.jsx';
import AudioButton from '../../components/audioButton.jsx';

// CSS
import '../../css/themes/PW.css'

// Javascript
import cloudsMain from '../../js/clouds.js';

// Assets
import favicon from '../../assets/images/PW/PWIcon.png';
import DesertBackground from '../../assets/images/PW/Desert Background.png';
import Thumbnail from '../../assets/images/PW/PWThumbnail.png';
import Dirt from '../../assets/images/PW/Dirt.png';
import PWSong from '../../assets/music/PWTheme.mp3';

import Button1 from '../../assets/images/PW/rButton/rButton1.png';
import Button2 from '../../assets/images/PW/rButton/rButton2.png';
import Button3 from '../../assets/images/PW/rButton/rButton3.png';

const PWHome = () => {

    useEffect(() => {
        cloudsMain();

        // Document title & favicon
        const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.rel = "icon";
        link.href = favicon;
        document.head.appendChild(link);
        document.title = "Pointless Wars";
    })

    return (
    <>
        <AudioButton path={PWSong}/>
        <img id="background" src={DesertBackground}/>
        <img id="ground" src={Dirt}/>
        <div id="image">
            <img id="logo" src={Thumbnail}/>
        </div>
        <h1>A game about wars... that are pointless</h1>
        <div id="description">
            <p id="descCenter">
                Pointless Wars is an online single-player/multiplayer game I created senior year of high school
                for the Technology Student Association video game design competition. It would go on to win regionals,
                win 3rd in states out of 30+ teams, and qualify for finals. This was the first game I ever made using the
                Unity Game Engine, and was able to teach me how to make music, pixel art, and other assets for the Unity Engine.
                Additionally, this was the first app I ever published on the Apple App Store.<br/>
                <a id="link" href="https://apps.apple.com/us/app/pointless-wars/id6451341413">View on Apple App Store</a>
            </p>
        </div>
        <iframe style={{top: "90vw"}} class="itchEmbed" src="https://itch.io/embed/1892975?border_width=5&amp;bg_color=3E86A1&amp;fg_color=f4f4f4&amp;link_color=0037f7&amp;border_color=583907" height="175" frameborder="0">
            <a href="https://spacemendevsquad.itch.io/pointless-wars">Pointless Wars (TSA 2023) by Spacemen Dev Squad</a>
        </iframe>
        <div id="playButton">
            <a href="/pointless-wars/play"><p id="playButtonText">Play Now!</p></a>
        </div>
        <Footer/>
    </>
    );
}

export default PWHome;