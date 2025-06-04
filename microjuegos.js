let numeroSecreto;
let intentos;
const maxIntentos = 10;

function iniciarJuego() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    document.getElementById("resultado").textContent = "¡Adivina un número entre 1 y 100! Tienes 10 intentos.";
    document.getElementById("resultado").style.color = "black";
    document.getElementById("intentos-restantes").textContent = `Intentos restantes: ${maxIntentos}`;
    document.getElementById("field-number").value = "";
    document.getElementById("field-number").disabled = false; // Habilitar el input al inicio o reiniciar
    document.getElementById("field-number").focus(); // Poner el foco en el input
}

function compara_numero() {
    const input = document.getElementById("field-number");
    const resultado = document.getElementById("resultado");
    const intentosRestantes = document.getElementById("intentos-restantes");

    const valor = parseInt(input.value);

    // Validación de entrada
    if (isNaN(valor) || valor < 1 || valor > 100) {
        resultado.textContent = "⚠️ Introduce un número válido entre 1 y 100.";
        resultado.style.color = "orange";
        input.value = ""; // Limpiar el input después de un error
        input.focus();
        return;
    }

    intentos++;

    if (valor === numeroSecreto) {
        resultado.textContent = `🎉 ¡Correcto! El número era ${numeroSecreto}.`;
        resultado.style.color = "green";
        input.disabled = true; // Deshabilitar el input si se adivina
    } else if (intentos >= maxIntentos) {
        resultado.textContent = `❌ Has perdido. El número era ${numeroSecreto}.`;
        resultado.style.color = "red";
        input.disabled = true; // Deshabilitar el input si se agotan los intentos
    } else if (valor < numeroSecreto) {
        resultado.textContent = `🔺 El número secreto es mayor que ${valor}.`;
        resultado.style.color = "blue";
    } else {
        resultado.textContent = `🔻 El número secreto es menor que ${valor}.`;
        resultado.style.color = "blue";
    }

    intentosRestantes.textContent = `Intentos restantes: ${maxIntentos - intentos}`;
    
    // Solo limpiar el input y poner el foco si el juego no ha terminado
    if (!input.disabled) {
        input.value = "";
        input.focus();
    }
}

function reiniciarJuego() {
    iniciarJuego();
}

// Iniciar el juego cuando la página esté completamente cargada
document.addEventListener("DOMContentLoaded", iniciarJuego);