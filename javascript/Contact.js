const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { "Accept": "application/json" }
  });

  if (response.ok) {
    status.textContent = "¡Mensaje enviado correctamente!";
    status.style.color = "green";
    form.reset();
  } else {
    status.textContent = "Error al enviar el mensaje.";
    status.style.color = "red";
  }
});