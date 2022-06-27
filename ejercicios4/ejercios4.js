
// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.



const esPrimo = numero => {
    if (typeof numero === 'number'){
        // 0 - 1 no son primos, tambien invluimos el 4 porque no es un numeor primo, pero no entraria al ciclo, asi que retornaria true y es incorreto
        if(numero === 0 || numero === 1) return false;
        for (let i = 2; i < numero / 2; i++) {
            console.log(`Entro al ciclo ${numero/2} ` )
            if ( numero % i === 0) return false
            
        }
        return true;
    }else{
        console.log('Debes ingresar dato numerico')
    }
}


// console.log(`El numero ${numero} es primo ? : ${esPrimo(7)}`);



// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const esPar = numero => {
    if (typeof numero === 'number'){
        let result = numero % 2 === 0 ? 'Par' : 'Impar';
        console.log(`El numero ${numero} es ${result}`);
    } else {
        console.log('Debe ingresar un dato de tipo numerico')
    }
}

// esPar(29);



// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.


const convertirGrados = (temperatura, grados) => {
    if( typeof temperatura === 'number' && typeof grados === 'string' ){
        grados = grados.toLowerCase()
        if(grados === 'c'){

            let resultado = (temperatura * (9/5)) + 32 ;
            console.log(`${resultado} F°`) 

        } else if(grados === 'f'){

            let resultado = (temperatura - 32) * (5/9) ;
            console.log(`${resultado} C°`) 

        } else {
            console.log('Solo se pueden convertir grados a Celcios (C) o Fahrenheit (F)')
        }
    } else {
        console.log('El primer rparametro recibido debe ser de tipo numerico y elsegundo de tipo string')
    }
}


convertirGrados(0,'c')