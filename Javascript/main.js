/**
 * Created 2025
 * Author Peter Brumbach
 */

// Import Loopify

document.addEventListener("DOMContentLoaded", () => {
    main();
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

    // Adds redirect listeners to footer buttons
    document.getElementById("Terms").addEventListener("click", ()=>{redirect("https://www.termsfeed.com/live/41eb87d6-84df-41e5-b737-d8a89a1ebdc3")});
    document.getElementById("Mystery").addEventListener("click", ()=>{redirect("/videoFile.mp4")});

    // Add expand listeners to footer buttons
    document.getElementById("Terms").addEventListener("mouseover", ()=>{expand("Terms")});
    document.getElementById("Sitemap").addEventListener("mouseover", ()=>{expand("Sitemap")});
    document.getElementById("Mystery").addEventListener("mouseover", ()=>{expand("Mystery")});
    document.getElementById("Terms").addEventListener("mouseout", resizeText);
    document.getElementById("Sitemap").addEventListener("mouseout", resizeText);
    document.getElementById("Mystery").addEventListener("mouseout", resizeText);

    // Creates audio looper, must wait
    await initalizeLooper();

    // Starts audio when screen is clicked
    document.addEventListener("click", firstPlay);

    // Adds click and hover listeners to audio button
    document.getElementById("musicButton").addEventListener("click", playAudio);
    document.getElementById("musicButton").addEventListener("mouseover", audioButtonHover);
    document.getElementById("musicButton").addEventListener("mouseout", makeAudioButton);
}

/**
 * Audio Related actions and Audio Button
 */
let audioLoop = null;
let startTime = 0.0;
let audioTime = 0.0;
let audioContext = null;
let audioBuffer = null;

// Create the audioContext and audioBuffer objects
async function initalizeLooper() {
    audioContext = new(window.AudioContext || window.webkitAudioContext);

    // Fetch Audio
    const source = await fetch("/SFX/Music/WebPage Home.mp3");
    const arrayBuffer = await source.arrayBuffer();
    audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
}

// Create audio loop
async function loopPlay() {
    // Create volume control
    let gainNode = audioContext.createGain();
    gainNode.gain.value = 0.3;
    await gainNode.connect(audioContext.destination)

    // Create audioLoop
    audioLoop = await audioContext.createBufferSource();
    audioLoop.loop = true;
    audioLoop.buffer = audioBuffer;
    await audioLoop.connect(gainNode);
    await audioLoop.start(0, audioTime % audioBuffer.duration);
    startTime = audioContext.currentTime;
}

async function firstPlay() {
    // Start audio when user clicks the screen
    const button = document.getElementById("musicButton");
    button.childNodes[1].src ="images/volume/volume0.png";
    loopPlay();
    document.removeEventListener("click", firstPlay);
    console.clear();
    console.log("Audio Currently Enabled")
}

async function playAudio() {
    // Toggleable audio with provided button
    const button = document.getElementById("musicButton");
    if (audioLoop === null) {
        await loopPlay();
        button.childNodes[1].src ="images/volume/volume0.png";
    } else {
        audioTime += (audioContext.currentTime - startTime) % audioBuffer.duration;
        audioLoop.stop();
        audioLoop = null;
        flipper = 1;
        button.childNodes[1].src ="images/volume/volume1.png";
    }
}

async function audioButtonHover() {
    // Changes audio button when cursor hovers over
    const hoverAudio = new Audio("/SFX/blipSelect.wav");
    hoverAudio.volume = 0.05;
    try {
        await hoverAudio.play(); 
    } catch {
        console.log("Audio Currently Disabled")
    }
    const audioButton = document.getElementById("musicButton");
    if (window.innerHeight < window.innerWidth) {
        audioButton.style.height = (window.innerHeight/9).toString()+"px";
    } else {
        audioButton.style.height = (window.innerWidth/9).toString()+"px";
    }
    audioButton.style.width = audioButton.style.height;
}

async function makeAudioButton() {
    // Resizes the audio buutton to fit the screen
    const audioButton = document.getElementById("musicButton");
    if (window.innerHeight < window.innerWidth) {
        audioButton.style.height = (window.innerHeight/10).toString()+"px";
    } else {
        audioButton.style.height = (window.innerWidth/10).toString()+"px";
    }
    audioButton.style.width = audioButton.style.height;
}

/**
 * Actions by the user (resize, scrolling, clicking) functions
 */

// Changes positions of objects based on scroll distance
async function scrollChange() {
    // Get Green Planet
    const greenplanet = document.getElementById("GreenPlanet");

    // Constant variables, calculate the path of the green planet
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const width = window.innerWidth + greenplanet.width;
    const percent = (scrollPosition)/totalScroll;

    // Animate Green Planet
    requestAnimationFrame( () =>
        greenplanet.style.transform = "translate("+(width*percent - greenplanet.width).toString()+"px)"
    );
}

// Resizes all elements to fit the window
// first is true when the user loads the page for the first time
async function resizeElements(first) {
    // Create planets
    let greenplanet = makeGreenPlanet(first);
    let audioButton = makeAudioButton();
    let allText = resizeText();

    // Wait for all planets to be ready
    await greenplanet;
    await audioButton;
    await allText;
}

// Takes user to a designated URL
async function redirect(url) {
    window.location.href = url;
}

/**
 * Background star functions
 */

// Create the default blinking star
async function initalizeStars() {

    // Time interval to spawn a star (milliseconds)
    const time = 200;

    const star0 = "/images/stars/star0.png";
    const star1 = "/images/stars/star1.png";
    const star2 = "/images/stars/star2.png";
    const star3 = "/images/stars/star3.png";
    const star4 = "/images/stars/star4.png";
    const starArray = [star0, star1, star2, star3, star4, star4, star3, star2, star1];
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
    const time = 150;
    currentStar.style.top = (Math.random() * 100).toString()+"%";
    currentStar.style.left = (Math.random() * 100).toString()+"%";
    if (Math.random() < 0.5) {
        currentStar.style.transform = "rotate("+(Math.random()*5).toString()+"deg)";
    } else {
        currentStar.style.transform = "rotate("+(Math.random()*-5).toString()+"deg)";
    }
    document.body.appendChild(currentStar);

    // Animate Star
    let newInterval = setInterval(() => {
        if (position >= 9) {
            currentStar.style.visibility = "hidden";
        } 
        else if (position === 0) {
            currentStar.style.visibility = "visible";
            currentStar.src = frames[position];
        }
        else {
            currentStar.src = frames[position];
        }
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
    let whiteText = document.getElementsByClassName("whiteText");
    for (const node of whiteText) {
        if (node.tagName.toLowerCase() === 'h1') {
            node.style.fontSize = (window.innerWidth/15).toString()+'px';
        } else {
            node.style.fontSize = (window.innerWidth/30).toString()+'px';
        }
    }
    let footerButtons = document.getElementsByClassName("footerButton");
    for (const node of footerButtons) {
        if (window.innerWidth/40 >= 16) {
            node.style.fontSize = '16px';
        } else {
            node.style.fontSize = (window.innerWidth/40).toString()+'px';
        }
    }
    let footerLabels = document.getElementsByClassName("footerText");
    for (const node of footerLabels) {
        if (window.innerWidth/40 >= 16) {
            node.style.fontSize = '16px';
        } else {
            node.style.fontSize = (window.innerWidth/40).toString()+'px';
        }
    }
}

async function expand(id) {
    const node = document.getElementById(id);
    if (window.innerWidth/40 >= 16) {
        node.style.fontSize = '17px';
    } else {
        node.style.fontSize = (1+window.innerWidth/40).toString()+'px';
    }
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