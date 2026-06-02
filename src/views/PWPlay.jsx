import React, { useEffect } from 'react';

// Components
import Footer from '../components/footer.jsx';

// CSS
import '../css/global/gameBG.css'

// Images
import favicon from '../assets/images/PW/PWIcon.png';

const PWPlay = () => {

    useEffect(() => {
        // Document title & favicon
        const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.rel = "icon";
        link.href = favicon;
        document.head.appendChild(link);
        document.title = "Pointless Wars: Web Player";
    })

    return (
    <>
        <iframe src="/webApps/pwGame/PWgame.html" title="PW Player"></iframe>
        <Footer/>
    </>
    );
}

export default PWPlay;