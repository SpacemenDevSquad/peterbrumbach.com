import React, { useEffect } from 'react';

// Components
import Footer from '../components/footer.jsx';

// CSS
import '../css/themes/countdown.css'
import '../css/global/snow.css'

// Javascript
import snowMain from '../js/snow.js';
import countMain from '../js/countdown.js';

// Assets
import favicon from '../assets/images/ChristmasCrash/Snow.png';

const Countdown = () => {

    useEffect(() => {
        snowMain();
        countMain();

        // Document title & favicon
        const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
        link.rel = "icon";
        link.href = favicon;
        document.head.appendChild(link);
        document.title = "Christmas Countdown";
    })

    return (
    <>
        <h1 id="weekday">Christmas is on a __ this year!</h1>
        <div id="vertical">
            <div id="horizontal">
                <h1 id="countdownText">
                    <strong id="days" className="number">16</strong> days
                    <strong id="hours" className="number">16</strong> hours
                    <strong id="minutes" className="number">16</strong> minutes
                    <strong id="seconds" className="number">16</strong> seconds
                </h1>
                <h2>Until Christmas!</h2>
                <p id="link"><a href="/">Back to Homepage</a></p>
            </div>
        </div>
        <Footer/>
    </>
    );
}

export default Countdown;