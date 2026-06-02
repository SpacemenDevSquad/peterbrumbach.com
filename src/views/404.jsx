import React, { useEffect } from 'react';

// CSS
import '../css/documents/errorPage.css'
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
        document.title = "Peter Brumbach";
    })

    return (
    <>
        <div id="vertical">
            <div id="horizontal">
                <h1>404</h1>
                <h2>File Not Found</h2>
                <a href="/">Back to Homepage</a>
            </div>
        </div>
        <Footer/>
    </>
    );
}

export default Sitemap;