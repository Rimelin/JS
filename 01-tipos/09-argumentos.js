function suma(a,b) {
    console.log(arguments); // <- no recomendable
    return a+b;
}

let resultado = suma(5,2);
console.log(resultado);
console.log(typeof suma);