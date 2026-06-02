/**
 * Created 2025
 * Peter Brumbach
 * 
 * Adds fireflies to the background
 */

async function startFireflyCreation() {
    await makeDefault();
    for (let count = 0; count < 20; count++) {
        createFireflies();
    }
}

let defaultFirefly = null;
async function makeDefault() {
    defaultFirefly = document.createElement("div");
    defaultFirefly.className = "firefly";
}

let speed = 20;
async function createFireflies() {
    let newFirefly = defaultFirefly.cloneNode(true);
    newFirefly.style.left = (Math.random()*window.innerWidth).toString()+"px";
    newFirefly.style.bottom = (Math.random()*window.innerHeight).toString()+"px";
    document.body.appendChild(newFirefly);
    let intervalTime = (Math.random() * 2000) + 1000;
    let relativePosX = 0;
    let relativePosY = 0;
    setInterval(()=> {
        let RandomNumX = (Math.random()*2 - 1)*speed;
        let RandomNumY = (Math.random()*2 - 1)*speed;
        let i = 0;
        let newInterval = setInterval(()=> {
            newFirefly.style.transform = 'translateX('+(relativePosX + RandomNumX*i).toString()+'px) '+'translateY('+(relativePosY + RandomNumY*i).toString()+'px)';
            i += 0.05
            if (i >= 1) {
                relativePosX += RandomNumX;
                relativePosY += RandomNumY;
                clearInterval(newInterval);
            }
        }, intervalTime/20);
    }, intervalTime);
}

export default startFireflyCreation;