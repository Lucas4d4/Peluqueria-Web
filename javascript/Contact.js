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
 




function esMovil() {
  const tieneToque = window.matchMedia("(pointer: coarse)").matches;
  const pantallaChica = window.matchMedia("(max-width: 768px)").matches;
  
  return tieneToque && pantallaChica;
}

/*

if (esMovil()) {
  console.log("Estás navegando desde un dispositivo móvil");
} else {
  console.log("Estás navegando desde una computadora");
}

*/