document.addEventListener("DOMContentLoaded", () => {
    main();
});

async function main() {
    resizeElements();

    // Resize elements when window size is changed
    window.addEventListener("resize", resizeElements);

    // Add hover effects to footer buttons
    document.getElementById("Terms").addEventListener("mouseover", ()=>{requestAnimationFrame(()=> {expandButton("Terms")})});
    document.getElementById("Sitemap").addEventListener("mouseover", ()=>{requestAnimationFrame(()=> {expandButton("Sitemap")})});
    document.getElementById("Mystery").addEventListener("mouseover", ()=>{requestAnimationFrame(()=> {expandButton("Mystery")})});
    document.getElementById("Terms").addEventListener("mouseout", ()=>{requestAnimationFrame(footerText)});
    document.getElementById("Sitemap").addEventListener("mouseout", ()=>{requestAnimationFrame(footerText)});
    document.getElementById("Mystery").addEventListener("mouseout", ()=>{requestAnimationFrame(footerText)});
}

async function resizeElements() {

    // Resize Elements when screen changes
    let resizeFooterText = footerText();

    // Wait for all elements to be ready
    await resizeFooterText;
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