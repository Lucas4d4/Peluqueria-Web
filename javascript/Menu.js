

$(document).ready(function(){

const datos = [
    { nombre: "Corte de Cabello", precio: "$2500", rating: 1.9, cat: "Corte" },
    { nombre: "Tinte / Color", precio: "$4500", rating: 2.7, cat: "Tratamiento" },
    { nombre: "Perfilado de Barba", precio: "$1500", rating: 4.5, cat: "Corte" },
    { nombre: "Alisado Keratina", precio: "$8000", rating: 4.8, cat: "Tratamiento" },
    { nombre: "Alisado Keratina", precio: "$8000", rating: 5.8, cat: "Tratamiento" }
];

const tabla = $('#miTabla').DataTable({
data: datos,
pageLength: 5,
columns: [
{ data: "nombre" },
{ data: "precio" },
{ data: "rating" },
{ data: "cat" }
]
});



$.fn.dataTable.ext.search.push(
function(settings, data, dataIndex){

let filtroPrecio = $('#precios').val();
let filtroValoracion = $('#valoracion').val();

let filtroCategoria = $('#categoria').val();

let precio = parseFloat(data[1].replace(/[^0-9.]/g,'')) || 0;
let valoracion = parseFloat(data[2]) || 0;
let categoria = data[3];

let cumplePrecio = true;
let cumpleValoracion = true;
let cumpleCategoria = true;

/* FILTRO PRECIO */

if (filtroPrecio === "MENOS DE 2000") {
cumplePrecio = precio < 2000;
}

if (filtroPrecio === "MAS DE 4000") {
cumplePrecio = precio > 4000;
}

if (filtroPrecio === "ENTRE 2000 Y 3000") {
cumplePrecio = precio >= 2000 && precio <= 4000;
}

/* FILTRO VALORACION POR RANGO */

if (filtroValoracion !== "") {

let min = parseFloat(filtroValoracion);
let max = min + 0.9;

cumpleValoracion = valoracion >= min && valoracion <= max;

}

/* FILTRO CATEGORIA */

if (filtroCategoria !== "") {
cumpleCategoria = categoria.toLowerCase().trim() === filtroCategoria.toLowerCase().trim();;
}


return cumplePrecio && cumpleValoracion && cumpleCategoria;

});



$('#btnFiltrar').on('click', function(){

tabla.draw();

});

$('#btnReinicio').on('click', function(){
$('#precios').val('');
$('#valoracion').val('');
$('#categoria').val('');

 tabla.search('').draw();

});
});