// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


// Evalua si el dato ingresado es un String 
const validar = cadena => {
    let tipoDato = typeof cadena
    let result = tipoDato === 'string' ? true : false
    return result
}

// Cadena de texto
let cadena = "Hola Mundo";


// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// contendra el resultado de la evaluacion 
let validacion = validar(cadena)

const numeroCaracteres = (validacion, cadena) => {
    if (validacion){
        return cadena.replaceAll(' ', '').length;
    } else {
        return 'El tipo de dato ingresado no es valido, debe ingresar una cadena de texto'
    }
}

// console.log(numeroCaracteres(validacion, cadena))


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

let numCaracter = 7; 

const recortarString = (validacion, cadena, num ) => {
    if(validacion && typeof num === "number"){
        return cadena.replaceAll(' ', '').substring(0, num)
    }else{
        return 'El tipo de dato ingresado no es valido, debe ingresar una cadena de texto'
    }
}

// console.log(recortarString(validacion, cadena, numCaracter))


// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

//caracter por el cual se quiere dividir la cadena
let divisor = ' ';

const convertirCadenaAString = (validacion, caracter, cadena) => {
    let result = validacion ? cadena.split(caracter) : 'El tipo de dato ingresado no es valido, debe ingresar una cadena de texto';
    return result;
}

console.log(convertirCadenaAString(validacion, divisor, cadena));