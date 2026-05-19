const filasPorPagina=2;
const tabla=document.getElementById("myTableHair");
const tbody=tabla.querySelector("tbody");
const filas=tbody.querySelectorAll("tr");

const totalPaginas=Math.ceil(filas.length/filasPorPagina);
const pagination=document.getElementById("pagination");

let paginaActual=1;

function mostrarPagina(pagina){
    paginaActual=pagina;

    //Ocultar todas las filas
    filas.forEach(fila=>fila.style.display="none");

    //Calcular inicio y fin
    const inicio=(pagina-1)*filasPorPagina;
    const fin=inicio+filasPorPagina;

    //Mostrar filas de la página actual
    for(let i=inicio;i<fin&&i<filas.length;i++){
        filas[i].style.display="";
    }

    actualizarBotones();

}  

function crearBotones(){
    pagination.innerHTML="";

    for(let i=1;i<=totalPaginas;i++){
        const btn=document.createElement("button");
        btn.textContent=i;
        btn.addEventListener("click",()=>{
            mostrarPagina(i);
            
        });

        pagination.appendChild(btn);
    }
}

function actualizarBotones(){
    const botones=pagination.querySelectorAll("button");

    botones.forEach((btn,index) => {
        btn.classList.toggle("active",index+1===paginaActual);
        
    });
}

function agregarColor(){
     const botones = document.querySelectorAll('.pagination button');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {

            // quitar active de todos
            botones.forEach(b => b.classList.remove('active'));

            // agregar active al seleccionado
            boton.classList.add('active');
        });
    });
}

function abrirModal(src){
    document.getElementById("modal").style.display="flex";
    document.getElementById("imagenGrande").src=src;
}

function cerrarModal(){
    document.getElementById("modal").style.display="none";
}

//CERRAR AL HACER click FUERA DE LA IMÁGEN
document.getElementById("modal").addEventListener("click",function(e){
    if(e.target===this){
        cerrarModal();
    }
});

crearBotones();
agregarColor();
mostrarPagina(1);