import React, { useEffect } from 'react';

// Components
import Footer from '../components/footer.jsx';

// CSS
import '../css/themes/DOND.css'

// Javascript

// Images
import favicon from '../assets/images/DOND/DDIcon.png';
import thumbnail from '../assets/images/DOND/DONDThumbnail.png';

const DONDHome = () => {

    useEffect(() => {
        // Document title & favicon
        const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.rel = "icon";
        link.href = favicon;
        document.head.appendChild(link);
        document.title = "Deal or No Deal";
    })

    return (
    <>
        <div id="image">
		<   img id="logo" src={thumbnail}/>
        </div>
        <h1>A fan-made parody game</h1>
        <div id="description">
            <p id="descCenter">
                As a fan of the Deal or No Deal game show, I decided to create my own web-based version
                of the classic Deal or No Deal arcade game, in which players choose a case and try to get
                as many tickets as they can!<br/>
                <strong style={{fontWeight: "900"}}>NOTE: This is a fan made game</strong><br/>
                All properties of Deal or No Deal are owned and controlled by Banijay Entertainment
            </p>
        </div>
        <iframe style={{top: "95vw"}} className="itchEmbed" src="https://itch.io/embed/2009767?border_width=5&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=fddc8c&amp;border_color=fddc8c" height="175" frameBorder="0">
            <a href="https://spacemendevsquad.itch.io/deal-or-no-deal">Deal or No Deal by Spacemen Dev Squad</a>
        </iframe>
        <div id="playButton">
            <a href="/DOND/play"><p id="playButtonText">Play Now!</p></a>
        </div>
        <Footer/>
    </>
    );
}

export default DONDHome;