import React, { useEffect } from 'react';

// Components
import Footer from '../components/footer.jsx';

// CSS
import '../css/global/gameBG.css'

// Images
import favicon from '../assets/images/DOND/DDIcon.png';

const DONDHome = () => {

    useEffect(() => {
        // Document title & favicon
        const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.rel = "icon";
        link.href = favicon;
        document.head.appendChild(link);
        document.title = "Deal or No Deal: Web Player";
    })

    return (
    <>
        <iframe src="/webApps/dondGame/DONDGame.html" title="DOND Player"></iframe>
        <Footer/>
    </>
    );
}

export default DONDHome;