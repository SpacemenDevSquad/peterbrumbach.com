import React, { useEffect } from 'react';

// CSS
import '../../css/portfolio/pdf.css'

// Javascript
import setCorrectPDF from '../../js/pdf.js';

// Images
import favicon from '../../assets/images/portfolio/favicon.ico';

// Components
import Transition from '../../components/transition.jsx';

const PDFView = () => {

    useEffect(() => {
        setCorrectPDF();

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
            <embed id="pdf" src="null"/>
        </div>
    </>
    );
}

export default PDFView;