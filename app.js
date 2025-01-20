// Colores disponibles para el efecto
const colors = ['green', 'yellow', 'cyan'];

// Selecciona todas las letras
const letters = document.querySelectorAll('.letter');

// Función para aplicar colores aleatorios a las letras
function applyRandomColors() {
  letters.forEach(letter => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    letter.style.color = randomColor;
  });
}

// Cambia los colores en intervalos regulares
setInterval(applyRandomColors, 300);