/**
 * Created 2025
 * Author Peter Brumbach
 */

document.addEventListener("DOMContentLoaded", () => {
    main();
    audioButtonMain("/SFX/Music/WebPage Home.mp3");
});

/**
 * Main Function, adds listeners and initalizes webpage
 */

async function main() {
    // Creates and sets the planets, must wait
    await resizeElements(true);

    // Starts up various other modules, can be started whenever
    initalizeStars();

    // Changes objects when window is resized
    window.addEventListener("resize", () => {resizeElements(false); scrollChange();});

    // Activates the function to change page based on scroll distance
    window.addEventListener("scroll", scrollChange);
}

/**
 * Actions by the user (resize, scrolling, clicking) functions
 */

// Changes positions of objects based on scroll distance
async function scrollChange() {
    // Get Green Planet
    const greenplanet = document.getElementById("GreenPlanet");
    const largeGrayPlanet = document.getElementById("largeGrayPlanet");

    // Constant variables, calculate the path of the green planet
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const width = window.innerWidth;
    const percent = (scrollPosition)/totalScroll;
    let modPercent = 0;

    // Animate Green Planet
    requestAnimationFrame( () => {
        // Green Planet Movement
        if (percent < 0.3) {
            modPercent = percent/0.3;
            greenplanet.style.transform = "translate("+((width+greenplanet.width)*modPercent - greenplanet.width).toString()+"px)";
        } else {
            greenplanet.style.transform = "translate("+(width).toString()+"px)";
        }
        // Large Gray Planet Movement
        if ((0.05 < percent) && (percent < 0.5)) {
            modPercent = (percent-0.05)/0.45;
            largeGrayPlanet.style.transform = "translate("+((width+largeGrayPlanet.width)*modPercent - largeGrayPlanet.width).toString()+"px)";
            grayPlanetText();
        } else {
            largeGrayPlanet.style.transform = "translate("+(width).toString()+"px)";
            grayPlanetText();
        }
    });
}

// Resizes all elements to fit the window
// first is true when the user loads the page for the first time
async function resizeElements(first) {
    // Create planets
    let greenplanet = makeGreenPlanet(first);
    let largeGrayPlanet = makeLargeGrayPlanet(first);
    let audioButton = makeAudioButton();

    // Wait for gray planet to resize text
    await largeGrayPlanet;
    let allText = resizeText();
    let resizeGrayPlanetText = grayPlanetText();

    // Wait for all planets to be ready
    await greenplanet;
    await audioButton;
    await allText;
    await resizeGrayPlanetText;
    document.getElementById("grayPlanetText").style.visibility = "visible";
}

/**
 * Background star functions
 */

// Create the default blinking star
async function initalizeStars() {

    // Time interval to spawn a star (milliseconds)
    const time = 300;

    const star0 = "/images/stars/star0.png";
    const star1 = "/images/stars/star1.png";
    const star2 = "/images/stars/star2.png";
    const star3 = "/images/stars/star3.png";
    const star4 = "/images/stars/star4.png";
    const starArray = [star0, star1, star2, star3, star4, star4, star3, star2, star1, star0];
    const defaultStar = new Image();
    defaultStar.className = "star";
    defaultStar.style.width = (window.innerHeight/20).toString()+"px";
    defaultStar.style.height = defaultStar.style.width;
    setInterval(() => {
        animateStar(defaultStar, starArray)
    }, time)
}

// Copies from default star, places on random spot on screen then animates
async function animateStar(star, frames) {
    // Create Star
    const currentStar = star.cloneNode(true);
    let position = 0;
    let totalRotate = 0;
    const time = 150;
    let rotateMult = Math.random()*5;
    currentStar.style.top = (Math.random() * 100).toString()+"%";
    currentStar.style.left = (Math.random() * 100).toString()+"%";
    if (Math.random() < 0.5) {
        rotateMult = -1*rotateMult;
    }
    document.body.appendChild(currentStar);

    // Animate Star
    let newInterval = setInterval(() => {
        if (position >= 10) {
            currentStar.style.visibility = "hidden";
        } 
        else if (position === 0) {
            currentStar.style.visibility = "visible";
            currentStar.src = frames[position];
        }
        else {
            currentStar.src = frames[position];
        }
        totalRotate += rotateMult;
        currentStar.style.transform = "rotate("+(totalRotate).toString()+"deg)";
        position += 1;
    }, time)

    // Delete Star
    setTimeout( ()=> {
        clearInterval(newInterval);
        document.body.removeChild(currentStar);
    }, time*12)   
}

/**
 * Changing/Resizing Text
 */
async function resizeText() {

    // White Intro Text
    let whiteText = document.getElementsByClassName("whiteText");
    for (const node of whiteText) {
        if (node.tagName.toLowerCase() === 'h1') {
            node.style.fontSize = (window.innerWidth/15).toString()+'px';
        } else {
            node.style.fontSize = (window.innerWidth/30).toString()+'px';
        }
    }
    // Gray Planet Text
    const grayPlanet = document.getElementById("largeGrayPlanet");
    const grayPlanetText = document.getElementById("grayPlanetText");
    grayPlanetText.style.top = window.getComputedStyle(grayPlanet).top.toString();
    grayPlanetText.style.width = grayPlanet.width.toString()+'px';
    grayPlanetText.style.height = grayPlanet.height.toString()+'px';
    grayPlanetText.style.fontSize = (grayPlanet.width/30).toString()+'px';
}

// Sets grayPlanetText on top of largeGrayPlanet
async function grayPlanetText() {
    const grayPlanet = document.getElementById("largeGrayPlanet");
    const grayPlanetText = document.getElementById("grayPlanetText");
    grayPlanetText.style.transform = grayPlanet.style.transform.toString();
}

/**
 * Resizing planets
 */

// Resize the first green planet based on window size
async function makeGreenPlanet(first) {
    // Initialize Green Planet with attributes
    const greenplanet = document.getElementById("GreenPlanet");
    greenplanet.style.height = (window.innerHeight/5).toString()+"px";
    greenplanet.style.width = greenplanet.style.height;
    if (first) {
        greenplanet.style.transform = "translate("+(-greenplanet.width).toString()+"px)";
    }
    greenplanet.style.visibility = "visible";
}

// Resize the large gray planet based on window size
async function makeLargeGrayPlanet(first) {
    // Initialize Green Planet with attributes
    const planet = document.getElementById("largeGrayPlanet");
    planet.style.height = (window.innerHeight/1.5).toString()+"px";
    planet.style.width = planet.style.height;
    if (first) {
        planet.style.transform = "translate("+(-planet.width).toString()+"px)";
    }
    planet.style.visibility = "visible";
}