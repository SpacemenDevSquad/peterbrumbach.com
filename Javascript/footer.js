/**
 * Created 2025
 * Peter Brumbach
 * 
 * Load onto every html page, used to get footer on page and working
 */

document.addEventListener("DOMContentLoaded", () => {
    footerMain();
});

async function footerMain() {
    resizeFooter()

    // Resize elements when window size is changed
    window.addEventListener("resize", resizeFooter);

    // Adds redirect listeners to footer buttons
    document.getElementById("Terms").addEventListener("click", ()=>{redirect("https://peterbrumbach.com/TOS")});
    document.getElementById("Sitemap").addEventListener("click", ()=>{redirect("https://peterbrumbach.com/sitemap")});
    document.getElementById("Mystery").addEventListener("click", ()=>{redirect("https://peterbrumbach.com/GetWrecked")});

    // Add hover effects to footer buttons
    document.getElementById("Terms").addEventListener("mouseover", ()=>{requestAnimationFrame(()=> {expandButton("Terms")})});
    document.getElementById("Sitemap").addEventListener("mouseover", ()=>{requestAnimationFrame(()=> {expandButton("Sitemap")})});
    document.getElementById("Mystery").addEventListener("mouseover", ()=>{requestAnimationFrame(()=> {expandButton("Mystery")})});
    document.getElementById("Terms").addEventListener("mouseout", ()=>{requestAnimationFrame(resizeFooter)});
    document.getElementById("Sitemap").addEventListener("mouseout", ()=>{requestAnimationFrame(resizeFooter)});
    document.getElementById("Mystery").addEventListener("mouseout", ()=>{requestAnimationFrame(resizeFooter)});
}

// Resize the footer bar to fit the site page
async function resizeFooter() {
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

// Expand button when cursor hovers over it
async function expandButton(id) {
    const node = document.getElementById(id);
    if (window.innerWidth/40 >= 16) {
        node.style.fontSize = '17px';
    } else {
        node.style.fontSize = (1+window.innerWidth/40).toString()+'px';
    }
}

// Redirect to designated url when clicked
async function redirect(url) {
    window.location.href = url;
}
