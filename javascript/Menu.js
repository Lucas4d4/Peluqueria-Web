

const datos = [
    {service: "Peluqueria Mujer", price: "$2400", rating: 6.0},
    {service: "Barberia", price: "$3000", rating: 7.0},
    {service: "Peluqueria Hombre", price: "$6000", rating: 3.5},
    {service: "Manicuria", price: "$8000", rating: 8.0},
    {service: "Peluqueria Infantil", price: "$4000", rating: 5.0}
]

const tableFilter=document.querySelector("#tableFilterService tbody");
datos.forEach(datos2=>{
const fila=document.createElement('tr');

/* SECCIÓN SERVICIO */
const celda=document.createElement('td');
celda.textContent=datos2.service;

/* SECCIÓN PRECIO */
const celda2=document.createElement('td');
celda2.textContent=datos2.price;

/* SECCIÓN VALORACION */
const celda3=document.createElement('td');
celda3.textContent=datos2.rating;

fila.appendChild(celda);
fila.appendChild(celda2);
fila.appendChild(celda3);

tableFilter.appendChild(fila);
});




function limpiarFiltro(){
    const filas=document.querySelectorAll("#tableFilterService tbody tr");
    filas.forEach(fila=>{
        let mostrar=true;
        fila.style.display = mostrar ? "" : "none";
    });
    document.getElementById("filterPrice").value="";
    document.getElementById("filterRating").value="";
    document.getElementById("filterService").selectedIndex=0;

}



function clickButton(){

    const filterPrice = document.getElementById("filterPrice").value;
    const filterRating = document.getElementById("filterRating").value;
    const filterService = document.getElementById("filterService").value;
    const service=document.getElementById("filterService").value;

     const filas = document.querySelectorAll("#tableFilterService tbody tr");

    const precioMax=parseFloat(filterPrice.replace(/[^0-9.]/g,'')) || 0;
    const valoracionMin=parseFloat(filterRating);

     filas.forEach(fila=>{
        const service2=fila.children[0].textContent;
        const price2= parseFloat(fila.children[1].textContent.replace(/[^0-9.]/g,'')) || 0;
        const rating2=parseFloat(fila.children[2].textContent);

        let mostrar=true;

        /* 
        true = muestra la fila
        false = NO muestra la fila
        */
        /* MOSTRAR CONDICIONES CONTRARIAS PARA QUE mostrar SEA IGUAL A false */
        /* if(filterService && service2.includes(filterPrice)) */

        if(!filterService.includes("Servicio") && !service2.includes(filterService)){
            mostrar=false;
        }

        if(filterPrice!==""&&price2>precioMax){
            mostrar=false;
        }

        if(filterRating!==""&&rating2<valoracionMin){
            mostrar=false;
        }
        /*
if(filterService.includes("Servicio")){
            mostrar=true;
        }
        else{
            if(service2.includes(filterService)){
            mostrar=true;
        }
            else{
                mostrar=false;
            }
        }
        
        if(filterPrice.includes("Precio")){
            mostrar=true;
        }
        else{
            let precio = parseFloat(price2.replace(/[^0-9.]/g,'')) || 0;
            if(filterPrice.includes("Menos de 2000")){
                if(precio<2000){
                    mostrar=true;
                }
                else{
                    mostrar=false;
                }
            }
            if(filterPrice.includes("Más de 4000")){
                if(precio>4000){
                    mostrar=true;
                }
                else{
                    mostrar=false;
                }
            }
            if(filterPrice.includes("Entre 2000 y 3000")){
                if(precio>=2000&&precio<=3000){
                    mostrar=true;
                }
                else{
                    mostrar=false;
                }
            }
        }
        */

        
        
        
    

        

         fila.style.display = mostrar ? "" : "none";

     });
}



function aparte(){
    tableFilter.remove();

    const filterPrice = document.getElementById("filterPrice").value;
    const filterRating = document.getElementById("filterRating").value;
    const filterService = document.getElementById("filterService").value;

     const filas = document.querySelectorAll("#tableFilterService tbody tr");

     filas.forEach(fila=>{
        const service2=fila.children[0].textContent;
        const price2=fila.children[1].textContent;
        const rating2=fila.children[2].textContent;

        let mostrar=true;

        /* MOSTRAR CONDICIONES CONTRARIAS PARA QUE mostrar SEA IGUAL A false */
        /* if(filterService && service2.includes(filterPrice)) */
        if(filterService && !service2.includes(filterPrice)){
            mostrar=false;
        }

        if(filterRating){
            let valoracion = parseFloat(rating2) || 0;
            if(filterRating === "Mayor a 5"){
            let min = 6.0;
            let max = 10.0;
            /* MOSTRAR CONDICIONES CONTRARIAS PARA QUE mostrar SEA IGUAL A false */
            /* if(valoracion >= min && valoracion <= max) */
            if(valoracion < min && valoracion > max){
            mostrar=false;
            }
            }

            if(filterRating === "Menor a 5"){
            let min = 0.0;
            let max = 4.9;

            /* if(valoracion >= min && valoracion <= max) */
            if(valoracion < min && valoracion > max){
            mostrar=false;
            }
            }

            if(filterRating === "Igual a 5"){
            let min = 5.0;
            let max = min + 0.9;

            /* if(valoracion >= min && valoracion <= max) */
            if(valoracion < min && valoracion > max){
            mostrar=false;
            }
            }
        }

        if(filterPrice){
            let precio = parseFloat(price2.replace(/[^0-9.]/g,'')) || 0;
            
            if (filterPrice === "MENOS DE 2000") {
                /* MOSTRAR CONDICIONES CONTRARIAS PARA QUE mostrar SEA IGUAL A false */
            /* if(precio<2000) */
            if(precio>=2000){
            mostrar=false;
            }
            }

            if (filterPrice === "MÁS DE 4000") {
            /* if(precio>4000) */
            if(precio<=4000){
            mostrar=false;
            }
            }

            if (filterPrice === "ENTRE 2000 Y 3000") {
            /* if(precio>=2000&&precio<=3000) */
            if(precio<2000&&precio>3000){
            mostrar=false;
            }
            }

        }

         fila.style.display = mostrar ? "" : "none";

     });
}