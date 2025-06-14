document.addEventListener("DOMContentLoaded", ()=>{

    setTimeout(()=>{
        if (sessionStorage.getItem("transition") === 'true') {
        revealTransition();
        } else {
            startup();
        }
    }, 0)

    document.querySelectorAll("a").forEach((link) =>{
        link.addEventListener("click", (event)=>{
            transitionButton(event, link)
        })
    })
})

async function startup() {
    document.getElementById("transition").style.zIndex = 0;
    document.getElementById("blackBlock").style.width = 0;
    document.getElementById("blackBlock").style.left = '';
    document.getElementById("blackBlock").style.right = '';
}

async function transitionButton(event, link) {
    document.getElementById("transition").style.zIndex = 10;
    event.preventDefault();
    const href = link.getAttribute("href");
    animateTransition().then(()=>{
        window.location.href = href;
    })
}

function animateTransition() {
    sessionStorage.setItem("transition", true);
    return new Promise((resolve)=>{
        const blackBlock = document.getElementById("blackBlock");
        const timer = 1000;

        blackBlock.style.left = '0';
        blackBlock.style.right = '';
        blackBlock.style.transitionDuration = timer.toString()+"ms";
        blackBlock.style.width = '100%';

        const transInterval = setInterval(()=>{
            resolve();
            clearInterval(transInterval);
        }, timer)
    })
}

async function revealTransition() {
    sessionStorage.setItem("transition", false);
    return new Promise((resolve)=>{
        const blackBlock = document.getElementById("blackBlock");
        const timer = 1000;

        blackBlock.style.left = '';
        blackBlock.style.right = '0';
        blackBlock.style.transitionDuration = timer.toString()+"ms";

        setTimeout(()=>{
            blackBlock.style.width = '0';
            const transInterval = setInterval(()=>{
                document.getElementById("transition").style.zIndex = 0;
                resolve();
                clearInterval(transInterval);
            }, timer)
        }, timer/10)

    })
}