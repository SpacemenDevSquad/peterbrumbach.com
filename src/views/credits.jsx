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

const Credits = () => {

    useEffect(() => {
        // Execute javascript functions
        smallStars();

        // Document title & favicon
        const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.rel = "icon";
        link.href = favicon;
        document.head.appendChild(link);
        document.title = "Credits";
    })

    return (
    <>
        <h1 className="title">Credits</h1>
        <h2 className="header" style={{fontFamily: "Roboto Slab"}}>Free projects and code that I used in my own creations, check them out here!</h2>
        <p className="link">
            Better Minimal WEBGL Template (by Seansleblanc):
            <a href="https://seansleblanc.itch.io/better-minimal-webgl-template"> https://seansleblanc.itch.io/better-minimal-webgl-template</a>
        </p>
        <p className="link">
            Terms & Conditions Generator (TermsFeed):
            <a href="https://app.termsfeed.com/"> https://app.termsfeed.com/</a>
        </p>
        <p className="link">
            Pixel Art Editor (Piskel):
            <a href="https://www.piskelapp.com/"> https://www.piskelapp.com/</a>
        </p>
        <p className="link">
            Cloudflare dynamic IP manager (by juancrrn):
            <a href="https://github.com/juancrrn/shell-cloudflare-dynamic-ip"> https://github.com/juancrrn/shell-cloudflare-dynamic-ip</a>
        </p>
        <p className="link">
            Unity Game Engine:
            <a href="https://unity.com/"> https://unity.com/</a>
        </p>
        <p className="link">
            Cloudflare:
            <a href="https://www.cloudflare.com/"> https://www.cloudflare.com/</a>
        </p>
        <p className="link">
            Apache HTTP Server Project:
            <a href="https://httpd.apache.org/"> https://httpd.apache.org/</a>
        </p>
        <p className="link">
            Let's Encrypt TLS Certificates:
            <a href="https://letsencrypt.org/"> https://letsencrypt.org/</a>
        </p>
        <p className="link">
            Visual Studio Code:
            <a href="https://code.visualstudio.com/"> https://code.visualstudio.com/</a>
        </p>
        <Footer/>
    </>
    );
}

export default Credits;