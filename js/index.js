document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mouseover', function () {
      const link = this.querySelector('a');  // Asegúrate de seleccionar correctamente el enlace
      const img = this.querySelector('img');
      let imgSrc = '';

      if (link) {  // Verifica que el enlace exista antes de obtener el href
        switch (link.getAttribute('href')) {
          case 'becas.html':
            imgSrc = 'img/1.png';
            break;
          case 'jornadas.html':
            imgSrc = 'img/2.png';
            break;
          case 'noticias.html':
            imgSrc = 'img/3.png';
            break;
          default:
            imgSrc = 'img/default.png'; // Imagen por defecto
            break;
        }

        if (img) {
          img.src = imgSrc;  // Actualiza la imagen solo si el elemento img existe
        }
      }
    });
  });
});