function redirectToWhatsApp() {
    // Cambia el número de teléfono por el que deseas usar en WhatsApp
    var phoneNumber = "86453779";
    // Crea el enlace de WhatsApp con el número de teléfono proporcionado
    var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber;
    // Redirige a la página de WhatsApp
    window.location.href = whatsappLink;
}
function downloadPDF() {
    // URL del archivo PDF
    var pdfURL = 'CV. Jafet Ulate.pdf';
    // Crear un elemento <a> oculto para iniciar la descarga del PDF
    var a = document.createElement('a');
    a.href = pdfURL;
    a.download = 'CV Jafet Ulate.pdf'; // Nombre del archivo PDF al descargar
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

// a continuación se enumeran las configuraciones predeterminadas 
window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTop');
    
    if (window.scrollY > 300) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
  });
  
  document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });