import React, { useEffect } from 'react';

// Components
import Footer from '../../components/footer.jsx';
import AudioButton from '../../components/audioButton.jsx';

// CSS
import '../../css/themes/DTB.css'

// Javascript
import startFireflyCreation from '../../js/firefly.js';

// Assets
import favicon from '../../assets/images/DTB/DropBall Icon.png';
import Logo from '../../assets/images/DTB/logo.png';
import DTBSong from '../../assets/music/DTBTheme.mp3';

const DTBHome = () => {

    useEffect(() => {
        startFireflyCreation();
        
        // Document title & favicon
        const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.rel = "icon";
        link.href = favicon;
        document.head.appendChild(link);
        document.title = "Drop Thee Ball";
    })

    return (
    <>
        <AudioButton path={DTBSong}/>
        <div id="image">
            <img id="logo" src={Logo}/>
        </div>
        <h1>A simple gravity puzzle game</h1>
        <div id="description">
            <p id="descCenter">
                Created in collaboration with John Bauer for 2D Games Design. 
                Roll the ball from the top of the screen to the goal, all while trying to keep the ball's momentum!
                <br/>Released in 2025
                <br/><a id="link" href="https://apps.apple.com/us/app/drop-thee-ball/id6753338414">View on Apple App Store</a>
            </p>
        </div>
        <div className="Spacer" style={{height: "50px"}}></div>
        <iframe style={{top: "90vw"}} src="https://itch.io/embed/3930682?bg_color=788d01&amp;fg_color=ffffff&amp;link_color=6f5731&amp;border_color=6f5731" height="175" frameBorder="0">
            <a href="https://spacemendevsquad.itch.io/drop-thee-ball">Drop Thee Ball by Spacemen Dev Squad</a>
        </iframe>
        <div className="Spacer" style={{height: "50px"}}></div>
        <div id="playButton">
            <a href="/drop-thee-ball/play"><p>Play Now!</p></a>
        </div>
        <div className="Spacer" style={{height: "100px"}}></div>
        <Footer/>
    </>
    );
}

export default DTBHome;