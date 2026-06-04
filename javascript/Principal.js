
const boton=document.getElementById("btnWhatsapp");
        
const label=document.createElement("label");
label.textContent="Entrar a WhatsApp";
label.htmlFor = "nombreInput";
label.id="lblWhatsapp";
label.style.backgroundColor="rgba(0, 180, 0, 1)";
label.style.display="none";
label.style.position="absolute";
label.style.padding="2px";
label.style.fontSize="1.2rem"; 
label.style.borderRadius="3px";
const contenedor=document.getElementById("contenedor2");
contenedor.appendChild(label);//AGREGA AL DIV PADRE EL ELEMENTO CREADO

if(validarPantalla()){
boton.addEventListener("mouseenter", () =>{ 
    const rect=boton.getBoundingClientRect();//getBoundingClientRect() obtiene la posición y el tamaño de un elemento en la ventana del navegador.
    const contRect=contenedor.getBoundingClientRect()
    label.style.left="30%";
    label.style.top="70%";//usar un valor más estándar y agregarle animación
    label.style.display="inline-block";
});

boton.addEventListener("mouseleave", () =>{
    label.style.display="none";
});    
}

else{
boton.addEventListener("mouseenter", () =>{ 
    const rect=boton.getBoundingClientRect();//getBoundingClientRect() obtiene la posición y el tamaño de un elemento en la ventana del navegador.
    const contRect=contenedor.getBoundingClientRect()
    label.style.left=rect.left+30+"px";
    label.style.top="83%";//usar un valor más estándar y agregarle animación
    label.style.display="inline-block";
});

boton.addEventListener("mouseleave", () =>{
    label.style.display="none";
});
}



function validarPantalla(){
    const pantallaTactil=window.matchMedia("(pointer: coarse)").matches;
    const pantallaChica=window.matchMedia("(max-width: 768px)").matches;

    return pantallaTactil && pantallaChica;
    //si es TRUE, es porque está en modo móvil
}