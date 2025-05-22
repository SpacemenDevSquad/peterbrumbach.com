document.addEventListener("DOMContentLoaded", () => {
    main();
});

async function main() {
    // Creates and sets the planets, must wait
    await createPlanets();

    // Starts up various other modules, can be started whenever
    initalizeStars();
    // Activates the function to change page based on scroll distance
    document.addEventListener("click", firstPlay);
    document.getElementById("musicButton").addEventListener("click", playAudio);
    document.getElementById("musicButton").addEventListener("mouseover", audioButtonHover);
    document.getElementById("musicButton").addEventListener("mouseout", makeAudioButton);
    window.addEventListener("scroll", scrollChange);
}

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

async function firstPlay() {
    // Start audio when user clicks the screen
    const player = document.getElementById("mediaPlayer");
    const button = document.getElementById("musicButton");
    player.volume = 0.5;
    player.play();
    button.childNodes[1].src ="images/volume/volume0.png";
    document.removeEventListener("click", firstPlay);
}

async function playAudio() {
    // Toggleable audio with provided button
    const player = document.getElementById("mediaPlayer");
    const button = document.getElementById("musicButton");
    if (player.paused) {
        player.play();
        button.childNodes[1].src ="images/volume/volume0.png";
    } else {
        player.pause()
        button.childNodes[1].src ="images/volume/volume1.png";
    }
}

async function audioButtonHover() {
    const hoverAudio = new Audio("/SFX/blipSelect.wav");
    hoverAudio.volume = 0.05;
    hoverAudio.play(); 
    const audioButton = document.getElementById("musicButton");
    audioButton.style.height = (window.innerHeight/9).toString()+"px";
    audioButton.style.width = audioButton.style.height;
}

async function initalizeStars() {

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

async function createPlanets() {
    // Create planets
    let greenplanet = makeGreenPlanet();
    let audioButton = makeAudioButton();

    // Wait for all planets to be ready
    await greenplanet;
    await audioButton;
}

async function makeAudioButton() {
    const audioButton = document.getElementById("musicButton");
    audioButton.style.height = (window.innerHeight/10).toString()+"px";
    audioButton.style.width = audioButton.style.height;
}

async function makeGreenPlanet() {
    // Initialize Green Planet with attributes
    const greenplanet = document.getElementById("GreenPlanet");
    greenplanet.style.height = (window.innerHeight/5).toString()+"px";
    greenplanet.style.width = greenplanet.style.height;
    greenplanet.style.transform = "translate("+(-greenplanet.width).toString()+"px)";
    greenplanet.style.visibility = "visible";
}