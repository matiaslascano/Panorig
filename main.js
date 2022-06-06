function productos(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const panFrances = new productos('Pan Frances', 250);
const panCriollo = new productos('Pan Criollo', 300);
const facturas = new productos('Factura', 120);
const pizzas = new productos('Pizza', 80)
const tortas = new productos('Torta', 140)
const tartas = new productos('Tarta', 350)

let nombre = prompt("Bienvenido a Panorig. Antes de continuar, ¿Cómo te llamas?");
let saludo =  alert ("Hola " + nombre + "!");

let pedido = prompt("¿Qué deseas pedir?: 1- Pan Frances, 2- Pan Criollo, 3- Factura, 4- Pizza, 5- Torta, 6- Tarta");
let cantidad = prompt("¿Cuánto deseas?");

if (pedido == 1) {
    alert("Tu pedido es: " + panFrances.nombre + " y cuesta: $" + panFrances.precio*cantidad);
} 
if (pedido == 2) {
    alert("Tu pedido es: " + panCriollo.nombre + " y cuesta: " + panCriollo.precio*cantidad);
} 
if (pedido == 3) {        
    alert("Tu pedido es: " + facturas.nombre + " y cuesta: " + facturas.precio*cantidad);
} 
if (pedido == 4) {
    alert("Tu pedido es: " + pizzas.nombre + " y cuesta: " + pizzas.precio*cantidad);
} 
if (pedido == 5) {
    alert("Tu pedido es: " + tortas.nombre + " y cuesta: " + tortas.precio*cantidad);
} 
if (pedido == 6) {     
    alert("Tu pedido es: " + tartas.nombre + " y cuesta: " + tartas.precio*cantidad);
}

