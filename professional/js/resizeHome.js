document.addEventListener("DOMContentLoaded", ()=>{
    fadeIn();
    resize();

    window.addEventListener("resize", resize)
})

async function fadeIn() {
    const welcome = document.getElementById("welcome");
    const subtitle = document.getElementById("subtitle");
    let delay = 700;
    if (sessionStorage.getItem("transition") === 'true') {
        delay += 300;
    }

    setTimeout(()=>{
        welcome.style.opacity = '100%';
        subtitle.style.opacity = '100%';
        welcome.style.marginTop = '15px';
        subtitle.style.marginTop = '15px';
    }, delay)
}

async function resize() {
    const allBlocks = document.getElementsByClassName("block");
    const allems = document.querySelectorAll("em");
    const allMenus = document.querySelectorAll("menu");

    const welcome = document.getElementById("welcome");
    const bio = document.getElementById("bio");
    const bioText = document.getElementById("bioText");
    const profile = document.getElementById("profile");
    const innerBlock = document.getElementById("innerBlock");
    const socialMedia = document.getElementById("socialMedia");
    const defFS = window.innerWidth/6;

    if (defFS > window.innerHeight/6) {
        welcome.style.fontSize = (window.innerHeight/6).toString()+'px';
        bio.style.height = "30vw";
        bioText.style.width = '40%';
        bioText.style.fontSize = '2svw';
        profile.style = '';
        socialMedia.style = '';
        innerBlock.style = 'display: flex;';
        document.documentElement.style.setProperty("--fontSize", "1.8svw")
        for (const e of allems) {
            e.style = '';
        }
        for (const e of allBlocks) {
            e.style.display = "flex";
        }
        for (const e of allMenus) {
            e.style = '';
        }
    } else {
        welcome.style.fontSize = defFS.toString()+'px';
        bio.style.height = "auto";
        bioText.style.width = '80%';
        bioText.style.fontSize = '2svh';
        profile.style = 'height: 50vh; width: 40vw;'
        socialMedia.style = 'height: 35vh;'
        innerBlock.style = 'display: flex; width: 80%';
        document.documentElement.style.setProperty("--fontSize", "2.4svh")
        for (const e of allBlocks) {
            e.style.display = "block";
        }
        for (const e of allems) {
            e.style.fontSize = "4svh";
        }
        for (const e of allMenus) {
            e.style = 'font-size: 2svh; line-height: 3.5svh;';
        }
    }
}