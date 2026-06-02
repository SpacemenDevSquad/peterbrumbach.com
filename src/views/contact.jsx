import React, { useEffect } from 'react';

// CSS
import '../css/documents/contact.css'
import '../css/global/smallStar.css'

// Javascript
import smallStars from '../js/smallStar.js';

// Images
import favicon from '../assets/images/favicon.ico';

// Components
import Footer from '../components/footer.jsx';

const Contact = () => {

    useEffect(() => {
        // Execute javascript functions
        smallStars();

        // Document title & favicon
        const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.rel = "icon";
        link.href = favicon;
        document.head.appendChild(link);
        document.title = "Contact";
    })

    return (
    <>
        <div id="vertical">
            <h1>
                To contact me about any of my projects, please use this email
            </h1>
            <p>Email: contact@peterbrumbach.com</p>
            <div style={{height: "40px"}}></div>
        </div>
        <Footer/>
    </>
    );
}

export default Contact;