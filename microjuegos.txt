let numeroSecreto;
let intentos;
const maxIntentos = 10;

function iniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
  document.getElementById("mensaje").textContent = "¡Tienes 10 intentos!";
  document.getElementById("mensaje").style.color = "black";
  document.getElementById("intentos-restantes").textContent = `Intentos restantes: ${maxIntentos}`;
  document.getElementById("numero-usuario").value = "";
  document.getElementById("numero-usuario").disabled = false;
}

function adivinarNumero() {
  const input = document.getElementById("numero-usuario");
  const mensaje = document.getElementById("mensaje");
  const intentosRestantes = document.getElementById("intentos-restantes");

  const valor = parseInt(input.value);

  if (isNaN(valor) || valor < 1 || valor > 100) {
    mensaje.textContent = "⚠️ Introduce un número válido entre 1 y 100.";
    mensaje.style.color = "orange";
    return;
  }

  intentos++;

  if (valor === numeroSecreto) {
    mensaje.textContent = `🎉 ¡Correcto! El número era ${numeroSecreto}.`;
    mensaje.style.color = "green";
    input.disabled = true;
  } else if (intentos >= maxIntentos) {
    mensaje.textContent = `❌ Has perdido. El número era ${numeroSecreto}.`;
    mensaje.style.color = "red";
    input.disabled = true;
  } else if (valor < numeroSecreto) {
    mensaje.textContent = `🔺 El número es mayor que ${valor}.`;
    mensaje.style.color = "blue";
  } else {
    mensaje.textContent = `🔻 El número es menor que ${valor}.`;
    mensaje.style.color = "blue";
  }

  intentosRestantes.textContent = `Intentos restantes: ${maxIntentos - intentos}`;
  input.value = "";
  input.focus();
}

function reiniciarJuego() {
  iniciarJuego();
}

document.addEventListener("DOMContentLoaded", iniciarJuego);