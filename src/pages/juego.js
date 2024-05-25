let selectedOption = null;

function selectOption(element) {
  // Clear previous selections
  document.querySelectorAll(".imagen").forEach((img) => {
    img.classList.remove("selected", "deselected");
  });

  // Set new selection
  selectedOption = element.getAttribute("data-option");
  element.classList.add("selected");

  // Set deselected for others
  document.querySelectorAll(".imagen").forEach((img) => {
    if (img !== element) {
      img.classList.add("deselected");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let count = 3;
  const insideCircle = document.querySelector(".inside-circle");

  const countdown = setInterval(() => {
    if (count > 1) {
      count--;
      insideCircle.textContent = count;
    } else {
      clearInterval(countdown);
      insideCircle.textContent = "¡GO!";
      setTimeout(showEnfrentamiento, 1000);
    }
  }, 1000);
});

function showEnfrentamiento() {
  if (!selectedOption) {
    alert("Por favor, selecciona una opción antes de jugar.");
    return;
  }

  const opciones = ["piedra", "papel", "tijera"];
  const randomIndex = Math.floor(Math.random() * opciones.length);
  const computerChoice = opciones[randomIndex];

  // Mostrar las elecciones
  document.querySelector(
    ".player-choice"
  ).innerHTML = `<img src="../imagen/${selectedOption}.png" alt="${selectedOption}" class="imagen imagen__${selectedOption}">`;
  document.querySelector(
    ".computer-choice"
  ).innerHTML = `<img src="../imagen/${computerChoice}.png" alt="${computerChoice}" class="imagen imagen__${computerChoice}">`;

  document.querySelector(".enfrentamiento").style.display = "flex";

  // Ocultar opciones y temporizador
  document.querySelector(".opciones").style.display = "none";
  document.querySelector(".timer").style.display = "none";

  // Navegar a la página de resultados después de una pausa
  setTimeout(() => {
    window.location.href = `results.html?player=${selectedOption}&computer=${computerChoice}`;
  }, 3000); // 3 segundos de pausa para mostrar el enfrentamiento
}
