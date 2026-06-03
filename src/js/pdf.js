const pdfs = import.meta.glob('../assets/pdf/*.pdf', {
  eager: true,
  import: 'default'
});

function setCorrectPDF() {
  const hashString = window.location.hash.substring(1);
  const pdf = document.getElementById('pdf');

  const path = pdfs[`../assets/pdf/${hashString}.pdf`];

  if (path) {
    pdf.src = path;
  }
}

export default setCorrectPDF;