//Personaje de TV
let nombre = "Aang";
let anime = "Avatar";
let edad = 12;
let pareja = "Katara";

let personaje = {
    nombre: "Aang", //es un par llave - valor (llave o propiedad = nombre valor = aang)
    anime: "Avatar",
    edad: 16,
    pareja: "Katara",
}; 

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 13;
let llave = 'edad';
personaje[llave] = 12;

delete personaje.pareja;
console.log(personaje);