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
}

/**
 * Creates the default snowflake
 */
let defaultSnowflake = null;

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

    const milliSeconds = 100;
    const speedFall = 100;

    setInterval(()=> {
        const newSnow = defaultSnowflake.cloneNode(true);
        newSnow.style.transform = 'rotate(45deg)'
        newSnow.style.left = (Math.random()*100).toString()+'%';
        let totalFall = 0;
        let totalDrift = 0
        document.body.appendChild(newSnow);
        const movement = setInterval(()=>{
            totalFall += 20;
            totalDrift += Math.random()*3 + 3;
            requestAnimationFrame(()=>{newSnow.style.transform = 'translate('+totalDrift.toString()+'px, '+totalFall.toString()+'px)';});
            if (totalFall > window.innerHeight*0.7) {
                document.body.removeChild(newSnow);
                clearInterval(movement);
            }
        }, speedFall)
    }, milliSeconds)
}