/**
 * Created 2025
 * Peter Brumbach
 * 
 * Finds the embed code for a specified scratch project using hash code
 * Uses turbowrap instead of vanilla scratch
 */
document.addEventListener("DOMContentLoaded", () => {
    findProject();
});

async function findProject() {
    const scratchPlayer = document.getElementById("scratchPlayer");
    const hashCode = window.location.hash.toString().substring(1);
    const embedCode = "https://turbowarp.org/"+hashCode+"/embed";
    scratchPlayer.setAttribute("src", embedCode);
}