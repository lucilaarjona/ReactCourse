//Forma base
const cuenta = 10;
/*
let mensaje;
if (cuenta > 0) mensaje = "No tenes mas saldo ";
else mensaje = "tienes saldo";
document.write(mensaje);
console.write(mensaje);
*/

//Forma mejorada: Operador ternario

const mensaje
 = cuenta < 0 ? "No tienes mas saldo" : "tienes saldo";
console.write(mensaje);
//operador ternario de una sola 'verdad'
/*
const mensaje1;
if(true) mensaje1 = "hola";
console.write(mensaje1)
*/

//Forma mejorada
/*
const mensaje2 = cuenta > 0 && "hola";
console.write(mensaje2);
*/

document.write(mensaje);
