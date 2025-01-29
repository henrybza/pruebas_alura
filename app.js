/* 
// primer logica
alert("Bienvenida y bienvenidos a nuestro sitio Web");
let nombre = "Lua";
let edad=25;
let numeroDeVenta=50;
let saldoDisponible=1000;
let mensajeError= "Error Completa todos los campos!"; 

alert(mensajeError);
nombre= prompt("cual es su nombre: ");
edad= prompt("cual es su ead: ");

if (edad >= 18) {
    alert("Puedes obetener tu licencia de conducir")
};

let numeroUsuarioLimite=prompt("Favor ingresa el numero que deseas regresar");
//let contador=0;
while (numeroUsuarioLimite>=0) {
    console.log (numeroUsuarioLimite);
    numeroUsuarioLimite--;
}


// practica4
nombre= "Henry"
variableUsuario= prompt("¿Cual es lenguaje de prog que mas te gusta?")
console.log("!Bienvenido¡")
console.log(`Hola ${nombre}`);
console.log(variableUsuario);

*/
let lenguajeDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];
let numeros = [3,5,6,5,9];


function muestraElemntosLista() {
     return console.log(lenguajeDeProgramacion);
  }

  function muestraElementosListaInvertido() {
    let ordenInvertidoArreglo = [];
    for (i=1; i<=lenguajeDeProgramacion.length;i++) {
     ordenInvertidoArreglo.push(lenguajeDeProgramacion[lenguajeDeProgramacion.length-i]);
    }
    return console.log(ordenInvertidoArreglo);

 }

function calculaPromedioLista () {
        let suma=0;
    for (i=0; i<numeros.length;i++) {
        suma= suma+numeros[i];

    }
    return console.log (suma/(numeros.length));
}


console.log(numeros);
muestraElemntosLista();
muestraElementosListaInvertido();
calculaPromedioLista();


