import React, { useEffect } from 'react';

// Components
import Footer from '../../components/footer.jsx';

// CSS
import '../../css/global/gameBG.css'

// Images
import favicon from '../../assets/images/DTB/DropBall Icon.png';

const DTBPlay = () => {

    useEffect(() => {
        // Document title & favicon
        const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.rel = "icon";
        link.href = favicon;
        document.head.appendChild(link);
        document.title = "Drop Thee Ball: Web Player";
    })

    return (
    <>
        <iframe src="/webApps/dropTheeBall/DTBGame.html" title="PW Player"></iframe>
        <Footer/>
    </>
    );
}

export default DTBPlay;