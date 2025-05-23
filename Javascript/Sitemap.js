document.addEventListener("DOMContentLoaded", () => {
    main();
});

async function main() {
    resizeElements();

    // Resize elements when window size is changed
    window.addEventListener("resize", resizeElements);

    // Adds redirect listeners to footer buttons
    document.getElementById("Terms").addEventListener("click", ()=>{redirect("https://peterbrumbach.com/TOS")});
    document.getElementById("Sitemap").addEventListener("click", ()=>{redirect("https://peterbrumbach.com/sitemap")});
    document.getElementById("Mystery").addEventListener("click", ()=>{redirect("/videoFile.mp4")});

    // Add hover effects to footer buttons
    document.getElementById("Terms").addEventListener("mouseover", ()=>{requestAnimationFrame(()=> {expandButton("Terms")})});
    document.getElementById("Sitemap").addEventListener("mouseover", ()=>{requestAnimationFrame(()=> {expandButton("Sitemap")})});
    document.getElementById("Mystery").addEventListener("mouseover", ()=>{requestAnimationFrame(()=> {expandButton("Mystery")})});
    document.getElementById("Terms").addEventListener("mouseout", ()=>{requestAnimationFrame(footerText)});
    document.getElementById("Sitemap").addEventListener("mouseout", ()=>{requestAnimationFrame(footerText)});
    document.getElementById("Mystery").addEventListener("mouseout", ()=>{requestAnimationFrame(footerText)});

    // Start this task last, renders the background stars
    smallStars();
}

async function resizeElements() {

    // Resize Elements when screen changes
    let resizeFooterText = footerText();
    let resizeSitemapText = sitemapText();

    // Wait for all elements to be ready
    await resizeFooterText;
    await resizeSitemapText;
}

/**
 * Sitemap text and links
 */
async function sitemapText() {
    // Text node size
    const titleText = (window.innerWidth/15).toString()+'px';
    const headerText = (window.innerWidth/30).toString()+'px';
    const linkText = (window.innerWidth/60).toString()+'px';
    const link = (window.innerWidth/58).toString()+'px';
    document.styleSheets[0].deleteRule(0);
    document.styleSheets[0].insertRule('a:hover {font-size: '+link+'}', 0)

    // Setting all the text nodes
    const titleNodes = document.getElementsByClassName("title");
    const headerNodes = document.getElementsByClassName("header");
    const linkNodes = document.getElementsByClassName("link");
    for(const node of titleNodes) {
        node.style.fontSize = titleText;
    }
    for(const node of headerNodes) {
        node.style.fontSize = headerText;
    }
    for(const node of linkNodes) {
        node.style.fontSize = linkText;
    }
}

/**
 * Functions related to background stars
 */
async function smallStars(){
    // Constant Variables
    const starAmount = 300;

    // Create the default background star
    const defaultStar = new Image();
    defaultStar.className = "star";
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

/**
 * All functions related to footer bar
 */
async function footerText() {
    // Footer Text Elements
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
    // Resize div bar based on font size
    // Yeah have fun looking at that
    document.getElementById("footer").style.height = (2*parseInt((footerLabels[0].style.fontSize.toString().slice(0, -2)))).toString() + 'px';
}

async function expandButton(id) {
    const node = document.getElementById(id);
    if (window.innerWidth/40 >= 16) {
        node.style.fontSize = '17px';
    } else {
        node.style.fontSize = (1+window.innerWidth/40).toString()+'px';
    }
}

// Takes user to a designated URL
async function redirect(url) {
    window.location.href = url;
}