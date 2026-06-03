import React, { useEffect } from 'react';

// Javascript
import transitionMain from '../js/transition';

// CSS
import '../css/portfolio/transition.css'

const Transition = () => {
    useEffect(() => {
        transitionMain();
    });

    return (
    <>
        <div id="transition">
            <div id="blackBlock"></div>
        </div>
    </>
    );
}

export default Transition;