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

const contenedor=document.getElementById("mainContact");
const boton=document.getElementById("btnWhatsapp");
if(esMovil()){
    const contenedorContact=document.getElementById("divContact");
    
    boton.style.display="none";
    const nuevoBoton=document.createElement("button");
    nuevoBoton.style.marginTop="40px";
    nuevoBoton.style.marginBottom="40px";
    nuevoBoton.value="Enviar por WhatsApp";
    nuevoBoton.textContent="Enviar por WhatsApp";
    nuevoBoton.style.fontSize="1.4rem";
    nuevoBoton.style.padding="6px 8px 6px 8px";
    nuevoBoton.style.borderRadius="2px";
    nuevoBoton.style.borderStyle="solid";
    nuevoBoton.style.borderColor="white";
    nuevoBoton.style.borderWidth="1px";
    nuevoBoton.style.backgroundColor="rgba(0, 180, 0, 1)";
    nuevoBoton.style.color="white";
    nuevoBoton.style.fontFamily="'Raleway',sans-serif";
    contenedor.appendChild(nuevoBoton);
}
else{
    const label=document.createElement("label");
label.textContent="Entrar a WhatsApp";
label.htmlFor = "nombreInput";
label.id="lblWhatsapp";
label.style.backgroundColor="rgba(0, 180, 0, 1)";
label.style.display="none";
label.style.position="absolute";
label.style.padding="2px"; 
label.style.borderRadius="3px";
label.style.fontSize="1.2rem";

contenedor.appendChild(label);//AGREGA AL DIV PADRE EL ELEMENTO CREADO

boton.addEventListener("mouseenter", () =>{ 
    const rect=boton.getBoundingClientRect();//getBoundingClientRect() obtiene la posición y el tamaño de un elemento en la ventana del navegador.
    const contRect=contenedor.getBoundingClientRect()
    label.style.left="78%";
    label.style.top="83%";//usar un valor más estándar y agregarle animación
    label.style.display="inline-block";
});

boton.addEventListener("mouseleave", () =>{
    label.style.display="none";
});    
} 



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