document.addEventListener("DOMContentLoaded", ()=>{
    setCorrectPDF();
})

function setCorrectPDF() {
    const hashString = window.location.hash.toString().substring(1);
    const pdf = document.getElementById("pdf");
    const path = '/pdf/'+hashString+'.pdf'
    pdf.setAttribute("src", path)
}