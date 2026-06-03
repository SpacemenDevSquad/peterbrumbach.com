import React, { useEffect } from 'react';

// CSS
import '../../css/portfolio/contact.css'

// Images
import favicon from '../../assets/images/portfolio/favicon.ico';

// Components
import Transition from '../../components/transition.jsx';

const Contact = () => {

    useEffect(() => {
        // Document title & favicon
        const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.rel = "icon";
        link.href = favicon;
        document.head.appendChild(link);
        document.title = "Portfolio";
    })

    return (
    <>
        <Transition/>
        <div id='content'>
            <div id="darken"></div>
            <a href="/portfolio">←Back</a>
            <h1>Contact Info</h1>
            <p>
                <strong>To reach out, use one of the following:</strong><br/>
                <strong>Email:</strong><a href="mailto:pmbrumbach@protonmail.com">pmbrumbach@protonmail.com</a><br/>
                <strong>Text:</strong><a href="tel:6102997342">(610)-299-7342</a>
            </p>
        </div>
    </>
    );
}

export default Contact;