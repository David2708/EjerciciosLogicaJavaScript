// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

// let cadena = "Hola";

const invertirCadena = cadena => {
    let resultado = typeof cadena === 'string' ? cadena.split('').reverse().join('') : 'Debe ingresar una cadena de texto';
    console.log(resultado);
}

//otra manera de hacerlo
const invertirCadenaFor = cadena => {
    let resultado = '';
    if(typeof cadena === 'string'){
        for(let i = cadena.length - 1; i >= 0; i--){
            resultado += cadena[i];
        }
    }else{
        resultado = ' Debe ingresar una cadena';
    }

    console.log(resultado);
}

// invertirCadena(cadena)
// invertirCadenaFor(cadena);

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

// let cadena = "hola mundo adios mundo";
// let palabra = "Mundo"

const numPalabraEnTexto =  (cadena, palabra) => {
    if(typeof cadena === 'string'){
        cadena = cadena.toLocaleLowerCase();
        palabra = palabra.toLocaleLowerCase();
        let nVeces = 0;
        cadena = cadena.split(" ");
        cadena.forEach(element => element === palabra ? nVeces +=1 : nVeces );
        console.log(`La palabra ${palabra} esta ${nVeces} en la cadena de texto`)
    }else{
        console.log('Debe ingresar una cadena de texto')
    }
}

// numPalabraEnTexto(cadena, palabra);

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// let cadena = "Salas";

const esPalindromo = cadena => {
    let nuevaCadena = '';
    let resultado;

    if(typeof cadena === 'string'){

        cadena = cadena.toLocaleLowerCase();

        // Invertimos la cadena de texto
        nuevaCadena = cadena.split('').reverse().join('');

        // Verificamos si es igual a la cadena ingresada
        resultado = nuevaCadena === cadena ? `La palabra ${cadena} es un palíndromo`: `La palabra ${cadena} NO es un palíndromo`;
        console.log(resultado);

    }else{
        console.log('Debe ingresar una cadena de texto');
    }
}


// esPalindromo(cadena);

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.


let cadena = "xyz1, xyz2, xyz3, xyz4 y xyz5";
let caracteres = "xyz";

const eliminarPatronDeCaracteres = (cadena, patron) => {

    if(typeof cadena === 'string' && typeof patron === 'string'){

        cadena = cadena.toLocaleLowerCase();
        patron = patron.toLocaleLowerCase();

        let resultado;

        // convertimos la cadena a un array
        let arrayCadena = cadena.split(' ');
        let nuevoArrayCadena = [];

        // recorremos el array y validamos si la palabra contiene el patron
        for (let i = 0; i < arrayCadena.length; i++) {
            if(arrayCadena[i].includes(patron)){
                arrayCadena[i] = arrayCadena[i].replace(patron, '');
                nuevoArrayCadena.push(arrayCadena[i]);
            }else{
                nuevoArrayCadena.push(arrayCadena[i]);
            }
        }

        resultado = nuevoArrayCadena.join(' ')
        console.log(resultado);
        
    }else{
        console.log('Debes ingresar una cadena de texto')
    }

}

eliminarPatronDeCaracteres(cadena, caracteres)




