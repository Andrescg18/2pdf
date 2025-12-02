const persona = {
nombre: "Elena",
edad: 32,
profesion: "Desarrolladora"
};

const coche = new Object();
coche.marca = "Toyota";
coche.modelo = "Corolla";
coche.año = 2022;

function Producto(nombre, precio) {
this.nombre = nombre;
this.precio = precio;
this.mostrarInfo = function() {
return `${this.nombre} -
$${this.precio}`;
};
}
const laptop = new Producto("MacBook
Pro", 1999);
console.log(laptop.mostrarInfo());
