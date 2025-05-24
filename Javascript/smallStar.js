/**
 * Created 2025
 * Peter Brumbach
 * 
 * Renders the background stars on html page
 */

document.addEventListener("DOMContentLoaded", () => {
    smallStarMain();
});

async function smallStarMain() {
    // Renders the background stars
    smallStars();
}

/**
 * Functions related to background stars
 */
async function smallStars(){
    // Constant Variables
    const starAmount = 300;

    // Create the default background star
    const defaultStar = new Image();
    defaultStar.className = "smallStar";
    defaultStar.style.width = (window.innerHeight/300).toString()+"px";
    defaultStar.style.height = defaultStar.style.width;
    defaultStar.src = "/images/stars/smallStar.png";

    // Copy the default star and randomize it somewhere onscreen
    for (let i = 0; i < 200; i++) {
        const currentStar = defaultStar.cloneNode(true);
        currentStar.style.top = (Math.random() * 100).toString()+"%";
        currentStar.style.left = (Math.random() * 100).toString()+"%";
        document.body.appendChild(currentStar);
    }
}