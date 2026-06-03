import React, { useEffect } from 'react';
import { FaApple, FaGithub, FaLinkedin } from 'react-icons/fa';

// CSS
import '../../css/portfolio/portfolio.css'

// Javascript
import resizeHomeMain from '../../js/resizeHome.js';

// Images
import favicon from '../../assets/images/portfolio/favicon.ico';
import profile from '../../assets/images/portfolio/profile.jpeg';

// Components
import Transition from '../../components/transition.jsx';

const PortHome = () => {

    useEffect(() => {
        resizeHomeMain();

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
        <div id="app">
            <div id="backgroundFade"></div>
            <div id="content">
                <div className="spacer" style={{height: "65%"}}></div>

                <h1 id="welcome">Portfolio</h1>
                <h2 id="subtitle">↓ Scroll Down ↓</h2>

                <div className="spacer" style={{height: "25%"}}></div>
                
                <div className="divider"></div>

                <div id="bio" className="block" style={{height: "30vw"}}>

                    <p id="bioText">
                        <em>Biography</em><br/><br/>
                        Hello! My name is Peter Brumbach. 
                        I am a current Computer Science BS student at Grove City College.
                        I enjoy theater, coding, reading, and hiking. My goal is to use the talents
                        that God has given me to help others and to make creations for people
                        to enjoy in the digital world.
                    </p>

                    <div id="bioSpace" style={{width: "15%", height: "40px"}}></div>

                    <div id="innerBlock" style={{display: "flex"}}>
                        <div id="socialMedia">
                            <a className="social" href="https://www.linkedin.com/in/peter-brumbach-307462287/"><FaLinkedin className='socialIcon'/></a> 
                            <div className="spacer" style={{height: "20%"}}></div>
                            <a className="social" href="https://github.com/SpacemenDevSquad"><FaGithub className='socialIcon'/></a>
                            <div className="spacer" style={{height: "20%"}}></div>
                            <a className="social" href="https://apps.apple.com/us/developer/peter-brumbach/id1697628835"><FaApple className='socialIcon'/></a>
                        </div>
                        <div style={{width: "15%"}}></div>
                        <img id="profile" src={profile}/>
                    </div>

                </div>

                <div className="divider"></div>

                <div className="block" style={{height: "30vw"}}>
                    <menu>
                        <em>Coding Projects/Games</em>
                        <li><a href="/raytracer">Javascript Raytracer</a> (2025)</li>
                        <li><a href="/drop-thee-ball">Drop Thee Ball</a> (2025)</li>
                        <li><a href="/pointless-wars">Pointless Wars</a> (2023)</li>
                        <li><a href="/DOND">Deal or No Deal (Fangame)</a> (2023)</li>
                        <li><a href="/christmascrash">Christmas Crash</a> (2022)</li>
                    </menu>
                    <div className="spacer" style={{width: "15%"}}></div>
                    <menu>
                        <em>Additional Resources</em>
                        <li><a href="/pdfView#resume">Resume</a></li>
                        <li><a href="/pdfView#bsa">Eagle Scout Congratulatory Letter</a></li>
                        <li><a href="https://meritpages.com/pmbrumbach">Merit Pages</a></li>
                    </menu>
                </div>

                <div className="spacer" style={{height: "30%"}}></div>
                <div id="footer">
                    <div className="spacer" style={{width: "10%"}}></div>
                    <img src={favicon} style={{width: "40px", height: "40px"}}/>
                    <ul>
                        <li><a className="footerlinks" href="/TOS">Terms and Conditions</a></li>
                        <li><a className="footerlinks" href="/portfolio/contact">Contact</a></li>
                        <li><a className="footerlinks" href="/sitemap">Sitemap</a></li>
                        <li>© 2026 Peter Brumbach</li>
                    </ul>
                    <div className="spacer" style={{width: "15%"}}></div>
                </div>
            </div>
        </div>
    </>
    );
}

export default PortHome;