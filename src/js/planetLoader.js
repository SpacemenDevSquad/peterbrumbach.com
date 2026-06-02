/**
 * Created 2025
 * Author Peter Brumbach
 */

/**
 * Main Function, adds listeners and initalizes webpage
 */

async function planetLoader() {
    // Creates and sets the planets, must wait
    await resizeElements(true);
    scrollChange();

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

    // Wait for gray planet to resize text
    await largeGrayPlanet;
    let allText = resizeText();
    let resizeGrayPlanetText = grayPlanetText();

    // Wait for all planets to be ready
    await greenplanet;
    await allText;
    await resizeGrayPlanetText;
    document.getElementById("grayPlanetText").style.visibility = "visible";
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

export default planetLoader;