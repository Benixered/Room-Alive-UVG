var altura = 10;
var espacio = " ";
var asterisco = " *";

console.log("Hola Mundo, miren mi arbolito: ");
for (i=0; i<altura; i++){
	console.log(espacio.repeat(altura-i) + asterisco.repeat(i+1) + "\n");
}
console.log(espacio.repeat(altura) + asterisco + "\n" + espacio.repeat(altura) + asterisco);
console.log("Con amor, Willi.")