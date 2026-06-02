import React, { useEffect } from 'react';

// Javascript
import footerMain from '../js/footer';

// CSS
import '../css/global/footer.css'

const Footer = () => {
    useEffect(() => {
        footerMain();
    })

    return (
    <>
        <div id="footer">
            <p id="Terms" className="footerButton">Terms and Conditions</p>
            <p id="Sitemap" className="footerButton">Sitemap</p>
            <p id="Mystery" className="footerButton">What's This?</p>
            <p className="footerText">© 2026 Peter Brumbach</p>
        </div>
        <i id="verse"></i>
    </>
    );
}

export default Footer;