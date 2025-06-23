/**
 * Created 2025
 * Peter Brumbach
 * 
 * Sets embed code source to specific pdf
 */
document.addEventListener("DOMContentLoaded", () => {
    findPDF();
});

async function findPDF() {
    const pdfViewer = document.getElementById("pdfViewer");
    const hashCode = window.location.hash.toString().substring(1);
    const embedCode = "/pdf/"+hashCode+".pdf";
    pdfViewer.setAttribute("src", embedCode);
}