let titulo = asignarElementosEnVariablesPorID("nombreJuego", "Juego del Numero Secreto");
let parrafo = asignarElementosEnVariablesPorID("texto1a10", "Ingrese un numero del 1 al 10.");
let informeJugador = ""; //aqui es donde ira el mensaje de feedback en la adivinanza
let textoInput = "";
let contadorDeIntentos = 0;

let numSecretoMinimo = 1;
let numSecretoMaximo = 10;
let arrayNumsSecretos = [];
let numeroSecreto = generarNumeroAleatorio(numSecretoMinimo,numSecretoMaximo);


//console.log("Num secreto: " + numeroSecreto);

function generarNumeroAleatorio(minimo, maximo) {

    let aleatorioAux = (Math.floor(Math.random()*((maximo-minimo)+1))+minimo);

    console.log("num secreto nuevo POSIBLE: " + aleatorioAux);
    console.log("array nums secretos antes del POSIBLE: " + arrayNumsSecretos);

    if (arrayNumsSecretos.length === ((numSecretoMaximo - numSecretoMinimo)+1)) {
        
        console.log(arrayNumsSecretos)
        return undefined;
        
    } else {

        if (arrayNumsSecretos.length === 0) {
            arrayNumsSecretos.push(aleatorioAux);
            console.log("es el primer elemento (primer if, se pusheo a la lista): " + aleatorioAux);
            return aleatorioAux;
    
        } else if (arrayNumsSecretos.includes(aleatorioAux)) {
            console.log("se repetia el elemento (segundo if, bucle): " + aleatorioAux);
            return generarNumeroAleatorio(minimo, maximo);
    
        } else {
            console.log("no se repetia el elemento (3er if, se pusheo a la lista): " + aleatorioAux);
            arrayNumsSecretos.push(aleatorioAux);
            return aleatorioAux;
    
        }
        
    }


}


function reiniciarJuego() {

    numeroSecreto = generarNumeroAleatorio(numSecretoMinimo,numSecretoMaximo);
    console.log("nuevo num secreto (inicio funcion reiniciar juego): " + numeroSecreto);

    if (numeroSecreto === undefined) {
        informeJugador = asignarElementosEnVariablesPorID("feedbackJugador",  `¡Ya agote los ${(numSecretoMaximo-numSecretoMinimo)+1} numeros que puedo pensar sin repetir! Se acabo el juego.`);
        
    } else {

        //numeroSecreto = generarNumeroAleatorio(numSecretoMinimo,numSecretoMaximo);
        //console.log("nuevo num secreto (inicio funcion reiniciar juego): " + numeroSecreto);
        informeJugador = asignarElementosEnVariablesPorID("feedbackJugador",  `¡Juguemos de nuevo! Ya pense en otro numero.`);
        limpiarInput();
        
    }


}

function limpiarInput() {
    textoInput = document.getElementById("numeroUsuario").value = "";

}

function asignarElementosEnVariablesPorID(idElemento, texto) {
    let elementoGenerico = document.getElementById(idElemento);
    elementoGenerico.innerHTML = texto;
    return;
}

function verificarIntento(){

    if (numeroSecreto === undefined) {
        informeJugador = asignarElementosEnVariablesPorID("feedbackJugador",  `¡Ya agote los ${(numSecretoMaximo-numSecretoMinimo)+1} numeros que puedo pensar sin repetir! Se acabo el juego.`);

    } else {

        let numUsuario = parseInt(document.getElementById("numeroUsuario").value); 
        //captura el numero del usuario
        console.log("inicio " + numUsuario);

        if (isNaN(numUsuario)) {
            informeJugador = asignarElementosEnVariablesPorID("feedbackJugador",  `¡No ingresaste ningun numero! Ingresa un numero para intentar adivinar.`);

        } else {
            contadorDeIntentos++;

            if (numUsuario == numeroSecreto) {
                //informeJugador.innerHTML = `¡Felicidades! ¡Has acertado! El numero era ${numeroSecreto}`;
                informeJugador = asignarElementosEnVariablesPorID("feedbackJugador",  `¡Felicidades! ¡Has acertado! El numero era ${numeroSecreto}. Lo adivinaste en ${contadorDeIntentos} ${(contadorDeIntentos == 1 ? "intento" : "intentos")}.`);
                contadorDeIntentos = 0;
                limpiarInput();
        
            } else if ( numUsuario > numeroSecreto){
                //informeJugador.innerHTML = `¡No! El numero que estoy pensando es menor que ${numUsuario}`;
                informeJugador = asignarElementosEnVariablesPorID("feedbackJugador",  `¡No! El numero que estoy pensando es menor que ${numUsuario}.`);
                limpiarInput();
                
            } else {
                //informeJugador.innerHTML = `¡No! El numero que estoy pensando es mayor que ${numUsuario}`;
                informeJugador = asignarElementosEnVariablesPorID("feedbackJugador",  `¡No! El numero que estoy pensando es mayor que ${numUsuario}.`);
                limpiarInput();
            }
        }

        console.log("final funcion " + numUsuario);
        
    }


}


/*
VERIFICACION RANGO CORRECTO:

while (minimo >= maximo ) {

    alert(`Error. El minimo debe ser menor que el maximo.
Intentelo nuevamente.`);
    
    minimo = parseInt(prompt("Ingrese el numero minimo del rango a adivinar."));
    maximo = parseInt(prompt("Ingrese el numero maximo del rango a adivinar"));

}
*/
