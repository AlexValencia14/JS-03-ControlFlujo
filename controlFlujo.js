console.log("Hola generation");


/*Flujo de control

Cuando hablamos de flujo de control hablamos del orden natural en el que se ejecutan las instrucciones de nuestro programa (arriba/ abajo, izq./der.). Estas instrucciones pueden ser una función, un console.log, un ciclo, etc.

La importancia que tiene le control de flujo radica en la posibilidad de poder ejecutar cosas o instrucciones dependiendo de una condicional (un elemento o instrucción detonante)


Condicionales

Las condiconales son palabras reservadas que nos permiten evaluar si una condición se cumple o no, bajo ciertos criterios (estipulados por el programador). Las respuestas o salidas esperadas siempre partiendo de un true o false.

Tengo la camisa limpia?
    si: voy a la fiesta
    no: me quedo en cas

Tengo esta variable?
    si: ejecuto la linea 57 de mi codigo
    no: ejecuto la linea 80 de mi codigo






condicional if (Si)

if nos sirve para validar si una condición se cumple o no. Si se cumple, entonces ejecuatamos el bloque de codigo que esta dentro del if. Si no se cumple, entonces no hacemos nada.
Nota: Es la condición más sencilla, pero la más limitante por que solo nos da una opción.

if (condición){
    //bloque de codigo que se ejecuta si la condición es verdadera (se cumple)
}

*/

//Ejemplo: Felipe va a ir a una fiesta y necesita tener su camisa favorita limpia para poder ir

if (camisaLimpia = true){//Siempre tiene que ser true para que se ejecute el codigo
    console.log("Felipe va a la fiesta");
}

/*

else (de otro modo, de lo contrario, si no)

if (condición detonante){
    //bloque de codigo que se ejecuta si la condición es verdadera
} else{
    //bloque de codigo que se ejecuta si la condición es falsa
}


*/
if (camisaLimpia = true){
    console.log("Felipe va a la fiesta");//true
} else{
    console.log("Felipe se queda en su casa a hacer la lloración");//false
}

/*

else if 

Esta condición nos ayuda a jugar con más opciones y más detonandetes, para tener muchas posibilidades en el mismo codigo. Para lograr esto, vamos a unir el else con el if

if (condición detonante){
    //bloque de codigo si la condición es verdadera
} else if (condición detonante 2) {
    //bloque de codigo si la condición 1 es falsa y la segunda condición es verdadera
} else {
    //bloque de codigo si las dos condiciones son falsas
}


*/

// Ejemplo 2: Felipe tiene hambre, quiere comer chilaquiles verdes

// if (hambre=true){
//     console.log("Felipe va a comer");
// } else if (chilaquilesVerdes=true){
//     console.log("Felipe come chilaquiles");
// } else {
//     console.log("Felipe no come");
// }

//Escribe un programa que me mueste 3 mensajes diferentes. El primer mensaje se muestra si son las 13:00 hrs y debera imprimir "vamos a descanso". El segundo mensaje se muestra si son las 14:30 hrs y debera imprimir "vamos a comer". El tercer mensaje se muestra si no se cumple nada de lo anterior y debera imprimir "seguimos programando"

//Prompt es una forma de ingresar datos y poder hacer uso de ellos


let hora=prompt("Hola, dime un numero");



if (hora==13){
    console.log("Vamos a descanso");
} else if (hora ==14){
    console.log("Vamos a comer");
} else {
    console.log("Seguimos programando");
}

/*

Switch (cambiar o intercambiar/ segun sea el caso)

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en función de la opción deseada (estado de la variable)

Evalua una expresión comparando el valor de una variable con la expresión o caso, y se ejecuta las declaraciones asociadas con este caso, asi como los casos que siguen.

Elementos principales del switch: un valor a evaluar, un detonante para cada caso, una salida para cada caso y una salida en general.


expresión con un valor

switch (expresión){
    case 1:
        //bloque de codigo que se ejecuta si la opción seleccionado es igual a 1
        break;
    case 2:
        //bloque de codigo que se ejecuta si la opción seleccionado es igual a 2
        break;
    case 3:
        //bloque de codigo que se ejecuta si la opción seleccionado es igual a 3
        break;
    default:
        //bloque de codigo que se ejecuta si ninguna opción coincide
}


*/


//Elevador con Switch
let pisoSwitch=prompt("A que piso vas?");
switch (pisoSwitch){
    case "1":
        console.log("Llegamos al piso 1");
        break;
    case "2":
        console.log("Llegamos al piso 2");
        break;
    case "3":
        console.log("Llegamos al piso 3");
        break;
    default:
        //bloque de codigo que se ejecuta si ninguna opción coincide
}


//Funciones aplicables a un consultorio dental

//Función Calcular costo de una consulta (condicionales)

//Variables para mis datos

let tipoServicio;
let tiempoConsulta;
let emergencia;
let promocion;
let clienteFrecuente;
let costo;

function calcularCostoConsulta(tipoServicio, tiempoConsulta, emergencia, promocion, clienteFrecuente) {
    
    tipoServicio="extraccion";
    tiempoConsulta=120;
    emergencia=true;
    promocion=.1;
    clienteFrecuente=true;
    costo=5000;
    promocionClienteFrecuente=0.1;

    //Calcular el costo total (antes de validar si es cliente frecuente)
    let costoTotal= costo*(1-promocion);

    //Condicional 
}


//Funciones 

/* Si es mayor de edad: else if
si es alergico: if
tiene alguna condición: switch
*/



function mayorEdad(edad) {
    if (edad>=60){
        console.log("Bienvenido, descuento por persona de la 3ra edad");
    } else if (edad<18){
        console.log("Es necesario ser mayor de edad para consultar, por favor venir con un adulto")
    } else{
        console.log("Bienvenido")
    }
}


let alergia;
function tratamiento (alergia){
    if (alergia == 1){
        console.log("Contestar el formulario de alergias");
    } else {
        console.log("Omitir formulario de alergias");
    }
}

let edad=25;

function servicios(){
    let opcionServicio = parseInt(prompt("¿Que tipo de tratamiento prefieres? \n 1. Evaluación y planificación de diseño de sonrisa (Gratis) \n 2. Limpieza dental \n 3. Extracción simple"));

    //Funcion principal SWITCH que llama a las funciones mayorEdad y tratamiento
    //En cada uno de los casos se llama a estas funciones, mostrando su respectivo costo
    //En DEFAULT muestra un error al no recibir un caso de los establecidos
    switch (opcionServicio){
        case 1:
            console.log("Seleccionaste EVALUACIÓN \n El costo es GRATUITO") //Confirmacion de seleccion
            let edad1 = parseInt(prompt("¿Cuantos anios tienes?"));
            mayorEdad(edad1);
            let alergia1 = parseInt(prompt("¿Cuentas con alguna alergia? \n Escribe 1 para responder SI \n Escribe otro número para responder NO"));  //Demostracion de opciones
            tratamiento(alergia1);
            break; //Se coloca esta linea para evitar el ciclo indefinido

        case 2:
            console.log("Seleccionaste LIMPIEZA \n El costo es $800") //Confirmacion de seleccion
            let edad2 = parseInt(prompt("¿Cuantos anios tienes?"));
            mayorEdad(edad2);
            let alergia2 = parseInt(prompt("¿Cuentas con alguna alergia? \n Escribe 1 para responder SI \n Escribe otro número para responder NO")); //Demostracion de opciones
            tratamiento(alergia2);
            break;

        case 3:
            console.log("Seleccionaste Extracción \n El costo es $300") //Confirmacion de seleccion
            let edad3 = parseInt(prompt("¿Cuantos anios tienes?"));
            mayorEdad(edad3);
            let alergia3 = parseInt(prompt("¿Cuentas con alguna alergia? \n Escribe 1 para responder SI \n Escribe otro número para responder NO")); //Demostracion de opciones
            tratamiento(alergia3);
            break;

        default:
            console.log("ERROR: No seleccionaste ninguna opcion"); //Mensaje error
    }

}

//INICIAR PROCESO DE OBTENCION DE DATOS OFRECIENDO SERVICIOS
servicios();