const words = [
    'californication', 'plataforma5', 'black', 'summer', 'flea', 'aeroplane', 'peppers',
    'unlimited', 'arcadium', 'love', 'getaway', 'stadium', 'quixoticelixer', 'quarter',
    'snow', 'dylan', 'zephyr', 'funky', 'chili'
  ];
  
  let palabraAleatoria;
  let time = 10;
  let score = 0;
  
  // Función para seleccionar una palabra aleatoria
  function randomWords() {
    return words[Math.floor(Math.random() * words.length)];
  }
  
  // Agrega la palabra al DOM
  function addToDOM() {
    palabraAleatoria = randomWords();
    document.getElementById('randomWord').innerText = palabraAleatoria;
  }
  
  // Llamamos la función inicialmente
  addToDOM();
  
  const input = document.getElementById('text');

  input.addEventListener('input', (e) => {
    const palabraIngresada = e.target.value.toLowerCase();
  
    if (palabraIngresada === palabraAleatoria) {
      time += 3; // Añadir tiempo extra
      updateScore(); // Actualizar la puntuación
      e.target.value = ''; // Limpiar el input
      addToDOM(); // Añadir una nueva palabra
    }
  });
  
  function actualizarTiempo() {
    time--;
    document.getElementById('timeSpan').innerText = `${time}s`;
  
    if (time === 0) {
      clearInterval(timeInterval);
      gameOver();
    }
  }
  
  // Iniciar el temporizador
  const timeInterval = setInterval(actualizarTiempo, 1000);
  
  function updateScore() {
    score++;
    document.getElementById('score').innerText = score;
  }
  
  function gameOver() {
    document.getElementById('end-game-container').innerHTML = `
      <h1>¡Tiempo agotado!</h1>
      <p>Puntaje final: ${score}</p>
      <button onclick="location.reload()">Jugar de nuevo</button>
    `;
    document.querySelector('.main').style.display = 'none';
  }
  