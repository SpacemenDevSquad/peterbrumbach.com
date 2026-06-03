import React, { useEffect } from 'react';

// CSS
import '../css/documents/sitemap.css'
import '../css/global/smallStar.css'

// Javascript
import smallStars from '../js/smallStar.js';

// Images
import favicon from '../assets/images/favicon.ico';

// Components
import Footer from '../components/footer.jsx';

const Sitemap = () => {

    useEffect(() => {
        // Execute javascript functions
        smallStars();

        // Document title & favicon
        const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.rel = "icon";
        link.href = favicon;
        document.head.appendChild(link);
        document.title = "Sitemap";
    })

    return (
    <>
        <h1 className="title">Sitemap</h1>
        <h2 className="header">Homepage</h2>
        <p className="link">
            <a href="/">https://peterbrumbach.com/</a>
        </p>
        <h2 className="header">Games/Projects</h2>
        <h3>Javascript-Based Raytracer</h3>
        <p className="link">
            Web Renderer: 
            <a href="/raytracer"> https://peterbrumbach.com/raytracer</a>
        </p>
        <h3>Drop Thee Ball (Unity Game)</h3>
        <p className="link">
            Drop Thee Ball Home:
            <a href="/drop-thee-ball"> https://peterbrumbach.com/drop-thee-ball</a>
        </p>
        <p className="link">
            Drop Thee Ball Play:
            <a href="/drop-thee-ball/play"> https://peterbrumbach.com/drop-thee-ball/play</a>
        </p>
        <p className="link">
            Drop Thee Ball Privacy Policy:
            <a href="/drop-thee-ball/privacypolicy"> https://peterbrumbach.com/drop-thee-ball/privacypolicy</a>
        </p>
        <h3>Pointless Wars (Unity Game)</h3>
        <p className="link">
            Pointless Wars Home: 
            <a href="/pointless-wars"> https://peterbrumbach.com/pointless-wars</a>
        </p>
        <p className="link">
            Pointless Wars Play: 
            <a href="/pointless-wars/play"> https://peterbrumbach.com/pointless-wars/play</a>
        </p>
        <p className="link">
            Pointless Wars Privacy Policy:
            <a href="/pointless-wars/privacypolicy"> https://peterbrumbach.com/pointless-wars/privacypolicy</a>
        </p>
        <h3>Deal or No Deal (Unity Game)</h3>
        <p className="link">
            DOND Home: 
            <a href="/DOND"> https://peterbrumbach.com/DOND</a>
        </p>
        <p className="link">
            DOND Play: 
            <a href="/DOND/play"> https://peterbrumbach.com/DOND/play</a>
        </p>
        <h3>Christmas Crash (SwiftUI App)</h3>
        <p className="link">
            Christmas Crash Home: 
        <a href="/christmascrash"> https://peterbrumbach.com/christmascrash</a>
        </p>
        <p className="link">
            Christmas Crash Privacy Policy:
            <a href="/christmascrash/privacypolicy"> https://peterbrumbach.com/christmascrash/privacypolicy</a>
        </p>
        <p className="link">
            Live Christmas Countdown: 
            <a href="/countdown"> https://peterbrumbach.com/countdown</a>
        </p>
        <h2 className="header">Portfolio</h2>
        <p className="link">
            Portfolio Home:
            <a href="/portfolio"> https://peterbrumbach.com/portfolio</a>
        </p>
        <p className="link">
            Portfolio Contact:
            <a href="/portfolio/contact"> https://peterbrumbach.com/portfolio/contact</a>
        </p>
        <h2 className="header">Other</h2>
        <p className="link">
            Sitemap:
            <a href="/sitemap"> https://peterbrumbach.com/sitemap</a>
        </p>
        <p className="link">
            Contact:
            <a href="/contact"> https://peterbrumbach.com/contact</a>
        </p>
        <p className="link">
            Credits:
            <a href="/credits"> https://peterbrumbach.com/credits</a>
        </p>
        <p className="link">
            Terms of Service:
            <a href="/TOS"> https://peterbrumbach.com/TOS</a>
        </p>
        <div id="Spacer" style={{paddingTop: "100px"}}></div>
        <Footer/>
    </>
    );
}

export default Sitemap;