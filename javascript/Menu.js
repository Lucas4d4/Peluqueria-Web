const datos=[
{imagen: "contenido/Cortes de pelo/Corte.webp", imagen2: "contenido/Cortes de pelo/Corte2.webp"},
{imagen: "contenido/Cortes de pelo/Corte3.webp", imagen2: "contenido/Cortes de pelo/Corte4.webp"},
{imagen: "contenido/Cortes de pelo/Corte5.webp", imagen2: "contenido/Cortes de pelo/Corte6.webp"},
];

const filasPorPagina=3;
let paginaActual=1;

function mostrarPagina(pagina){
    const tablaBody=document.querySelector("#miTabla tbody");
    tablaBody.innerHTML="";
    paginaActual=pagina;
    /* EL Array DE 'datos.slice' SIEMPRE EMPIEZA POR EL ÍNDICE 0 */
    const inicio=(pagina-1)*filasPorPagina;
    const fin=inicio+filasPorPagina;
    const datosPagina=datos.slice(inicio,fin);
    datosPagina.forEach (datos=>{
        const fila=`
        <tr>
        <td><img src="${datos.imagen}" class="imgMenu"></td>
        <td><img src="${datos.imagen2}" class="imgMenu"></td>
        </tr>
        `;
        tablaBody.innerHTML+=fila;
    });
    crearBotones();
}

function crearBotones(){
    const contenedor=document.getElementById("paginacion");
    contenedor.innerHTML="";
    const totalPaginas=Math.ceil(datos.length/filasPorPagina);
    for(let i=1;i<=totalPaginas;i++){
        const boton=document.createElement("button");
        boton.innerText=i;
        if(i===paginaActual){
            boton.style.fontWeight="bold";
        }
        boton.addEventListener("click",()=>{
            mostrarPagina(i);
        });
        contenedor.appendChild(boton);
    }
}

mostrarPagina(1);