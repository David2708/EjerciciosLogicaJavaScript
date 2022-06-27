// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

let min = 501;
let max = 600;

const obtenerAleatorio = (min, max) => {
    if(typeof min === 'number' && typeof max === 'number'){
        min = Math.ceil(min);
        max = Math.floor(max);
        console.log(Math.floor(Math.random() * (max - min + 1) + min));
    }else{
        console.log('Debe ingresar un dato de tipo numerico');
    }
}

// obtenerAleatorio(min, max);


// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

let numero = 2002;

const esCapicua = numero => {
    if (typeof numero === 'number'){
        let numeroCapicua = numero;
        numeroCapicua = String(numero);
        numeroCapicua = numeroCapicua.split('').reverse().join('');
        numeroCapicua = parseInt(numeroCapicua);
        let result = numeroCapicua === numero ? true : false;
        console.log(`El numero ${numero} es capicúa ? : ${result}`);
    }else{
        console.log('Debe ingresar un dato de tipo numerico');
    }
}

// esCapicua(numero);

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const dato = 5;

const factorial = num => {
    if(typeof num === 'number'){
        let fact = 1;
        for(let i=1; i <= num; i++){
            fact *= i;
        }
        console.log(`El factorial de ${num} es ${fact}`);
    }else{
        console.log('Debe ingresa un tipo de dato numerico')
    }
}

factorial(dato);

