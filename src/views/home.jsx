import React, { useEffect } from 'react';

// CSS
import '../css/themes/main.css'
import '../css/global/smallStar.css'

// Javascript
import smallStars from '../js/smallStar.js';
import initalizeStars from '../js/blinkStar.js';
import planetLoader from '../js/planetLoader.js';

// Assets
import greenPlanet from '../assets/images/planets/greenPlanet.png';
import largeGrayPlanet from '../assets/images/planets/largeGrayPlanet.png';
import favicon from '../assets/images/favicon.ico';
import HomeSong from '../assets/music/WebPage Home.mp3';

// Components
import AudioButton from '../components/audioButton.jsx';
import Footer from '../components/footer.jsx';

const Home = () => {

    useEffect(() => {
        // Execute javascript functions
        smallStars();
        initalizeStars();
        planetLoader();

        // Document title & favicon
        const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.rel = "icon";
        link.href = favicon;
        document.head.appendChild(link);
        document.title = "Peter Brumbach";
    })

    return (
    <>
        <AudioButton path={HomeSong}/>
        <h1 className="whiteText">Welcome!</h1>
        <p className="whiteText">Scroll Down...</p>
        <img className="planet" id="GreenPlanet" src={greenPlanet}/>
        <img className="planet" id="largeGrayPlanet" src={largeGrayPlanet}/>
        <div className="planetText" id="grayPlanetText">
            <p className="planetText">
                Welcome to peterbrumbach.com!<br/>
                This site is under active development, so expect bugs/imperfections.
                I will be posting some of my own personal projects/games here for you to check out.
                Please enjoy, and if you run into any problems, let me know!
            </p>
        </div>
        <Footer/>
    </>
    );
}

export default Home;