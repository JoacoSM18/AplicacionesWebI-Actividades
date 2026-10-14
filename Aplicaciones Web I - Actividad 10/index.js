let edad = 20;
let numero = 7;
let nota = 8;
//Estructuras de Control Condicionales
//A
    if (edad >= 18) {
        console.log("Es Mayor de Edad");
    } else {
        console.log("Es Menor de Edad");
    }

//B
    if (numero % 2 === 0) {
        console.log("El Número es Par");
    } else {
        console.log("El Número es Impar");
    }

//C
    if (nota < 4) {
        console.log("Desaprobado");
    } else if (nota <= 7) {
        console.log("Aprobado");
    } else {
        console.log("Promocionado");
    }

//Estructuras de Control de Bucles
//A
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

//B
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }

//C
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            console.log("El Número es Par");
        } else {
            console.log("El Número es Impar");
        }
    }

//D
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            console.log(`El Número ${i} es Par`);
        } else {
            console.log(`El Número ${i} es Impar`);
        }
    }
