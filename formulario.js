document.addEventListener("DOMContentLoaded", () => {
  const name_field = document.getElementById("name-field");
  const birthday_field = document.getElementById("birthday-field");
  // const color_field = document.getElementById("color-field"); // Este ID no está en tu HTML actual, se podría comentar o eliminar si no se usa.
  const message_field = document.getElementById("message-field"); // Este ID no está validado en el JS, pero está bien tenerlo.
  const contact_form = document.getElementById("contacto-form");

  contact_form.addEventListener("submit", (event) => {
    let send = true;

    // Validación del campo Nombre
    if (name_field.value.length <= 2 || name_field.value.length > 32) {
      send = false;
      name_field.style.border = "1px solid red";
    } else {
      name_field.style.border = "1px solid green";
    }

    // Validación del campo Fecha de Nacimiento
    if (birthday_field) { // Asegura que el campo existe
      const value = birthday_field.value;
      if (value === "" || value.length !== 10) { // Espera formato YYYY-MM-DD
        send = false;
        birthday_field.style.border = "1px solid red";
      } else {
        const [year, month, day] = value.split("-").map(Number);
        // Validación de rangos para año, mes y día
        if (
          isNaN(year) || isNaN(month) || isNaN(day) ||
          year <= 0 || year > 2025 || // Año máximo ajustado a 2025 o el que consideres
          month <= 0 || month > 12 ||
          day <= 0 || day > 31
        ) {
          send = false;
          birthday_field.style.border = "1px solid red";
        } else {
          birthday_field.style.border = "1px solid green";
        }
      }
    }

    // Aquí podrías añadir más validaciones para message_field, color_field, etc.
    // Por ejemplo:
    // if (message_field.value.trim().length < 10) { // Mínimo 10 caracteres para el mensaje
    //   send = false;
    //   message_field.style.border = "1px solid red";
    // } else {
    //   message_field.style.border = "1px solid green";
    // }


    if (!send) {
      console.log("Formulario con errores. No se ha enviado.");
      event.preventDefault(); // Detiene el envío del formulario si hay errores
      alert("Por favor, corrige los errores en el formulario antes de enviar."); // Un aviso al usuario
    } else {
      console.log("Formulario validado correctamente. ¡Enviando!");
      alert("¡Formulario enviado correctamente!"); // Un aviso de éxito
      // Aquí es donde normalmente enviarías los datos a un servidor (por ejemplo, con fetch API)
      // event.target.submit(); // Si quieres que se envíe después de la validación
    }
  });
});