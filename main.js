function productos(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
const panFrances = new productos('Pan Frances', 250);
const panCriollo = new productos('Pan Criollo', 300);
const facturas = new productos('Factura', 120);
const pizzas = new productos('Pizza', 80);
const tortas = new productos('Torta', 140);
const tartas = new productos('Tarta', 350);

let nombre = prompt("Bienvenido a Panorig. Antes de continuar, ¿Cómo te llamas?");
let saludo =  alert ("Hola " + nombre + "!");
let pedido = prompt("¿Qué deseas pedir " + nombre + "?: 1- " + panFrances.nombre + " $" + panFrances.precio + " el kg, 2- " + panCriollo.nombre + " $" + panCriollo.precio + " el kg, 3-  " + facturas.nombre + " $" + facturas.precio + " la unidad, 4- " + pizzas.nombre + " $" + pizzas.precio + " la unidad, 5- " + tortas.nombre + " $" + tortas.precio + " el kg, 6- " + tartas.nombre + " $" + tartas.precio + " la unidad");
let cantidad = prompt("¿Cuánto deseas?");

if (pedido == 1) {
alert("Tu pedido es: " + panFrances.nombre + " $" + panFrances.precio * cantidad);
} else if (pedido == 2) {
    alert("Tu pedido es: " + panCriollo.nombre + " $" + panCriollo.precio * cantidad);
} else if (pedido == 3) {
    alert("Tu pedido es: " + facturas.nombre + " $" + facturas.precio * cantidad);
} else if (pedido == 4) {    
    alert("Tu pedido es: " + pizzas.nombre + " $" + pizzas.precio * cantidad);
} else if (pedido == 5) {
    alert("Tu pedido es: " + tortas.nombre + " $" + tortas.precio * cantidad);
} else if (pedido == 6) {
    alert("Tu pedido es: " + tartas.nombre + " $" + tartas.precio * cantidad);
} else {
    alert("No tenemos ese producto");
}       
alert("Muchas gracias por su compra. Vuelvas prontos")





