// Validación del formulario
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener valores
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Borrar errores previos
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  let valido = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "El nombre es obligatorio.";
    valido = false;
  }

  if (email === "" || !email.includes("@")) {
    document.getElementById("emailError").textContent = "Correo inválido.";
    valido = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "El mensaje no puede estar vacío.";
    valido = false;
  }

  if (valido) {
    alert("¡Formulario enviado correctamente!");
    document.getElementById("contactForm").reset();
  }
});

// Botón de alerta
function mostrarAlerta() {
  alert("¡Gracias por visitar nuestra página!");
}
