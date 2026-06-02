/**
 * Created 2025
 * Peter Brumbach
 * 
 * Renders snow in the background on html page
 */

document.addEventListener("DOMContentLoaded", () => {
    snowMain();
});

async function snowMain() {
    await defaultSnow();
    snowfall();
    document.addEventListener('mousemove', (event) => {
        cursorX = event.pageX - window.innerWidth/2;
    });
}

/**
 * Creates the default snowflake
 * Also contains default variables
 */
let defaultSnowflake = null;
let defaultScreenFall = 0.7;
let defaultWindMod = 3;
let defaultFallSpeed = 20;
let spawnTime = 100;
let cursorModify = 0;
let cursorX = 0;

// Sets the distance the snow will fall (1.0 is bottom of body)
async function setScreenFall(decimal) {
    defaultScreenFall = decimal;
}

// Modifies the wind
// Snow will go more right with positive integers
// Reverse is true for negative
async function setWind(decimal) {
    defaultWindMod = decimal;
}

// Sets the pixel amount that the snow will fall by
// Only positive integers
async function setFallSpeed(decimal) {
    if (decimal <= 0) {
        return;
    }
    defaultFallSpeed = decimal;
}

// Spawns in snowflakes every X milliseconds
// Default is 100 milliseconds
async function setSpawnTime(milliSec) {
    spawnTime = milliSec;
}

// Allows cursor to modify the wind
// Default is 0
async function setCursorModify(decimal) {
    cursorModify = decimal;
}


async function defaultSnow(){
    // Create the snowflake template
    defaultSnowflake = new Image();
    defaultSnowflake.src = "/images/ChristmasCrash/Snow.png"
    defaultSnowflake.className = "snow";
    defaultSnowflake.style.width = (window.innerHeight/100).toString()+"px";
    defaultSnowflake.style.height = defaultSnowflake.style.width;
    defaultSnowflake.style.top = (window.innerHeight/-100).toString()+"px";
}

async function snowfall() {

    const frameTime = 100;

    setInterval(()=> {
        const newSnow = defaultSnowflake.cloneNode(true);
        newSnow.style.transform = 'rotate(45deg)'
        newSnow.style.left = (Math.random()*100).toString()+'%';
        let totalFall = 0;
        let totalDrift = 0
        document.body.appendChild(newSnow);
        const movement = setInterval(()=>{
            if (totalFall > window.innerHeight*defaultScreenFall) {
                document.body.removeChild(newSnow);
                clearInterval(movement);
            }
            totalFall += defaultFallSpeed;
            totalDrift += Math.random()*defaultWindMod + defaultWindMod + cursorX*cursorModify;
            //window.requestAnimationFrame(()=>{newSnow.style.transform = 'translate('+totalDrift.toString()+'px, '+totalFall.toString()+'px)';});
            newSnow.style.transform = 'translate('+totalDrift.toString()+'px, '+totalFall.toString()+'px)';
        }, frameTime)
    }, spawnTime)
}