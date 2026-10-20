//1A
function saludar() {
  console.log('¡Hola, bienvenido!');
}
saludar();

//B
function saludarPersona(nombre) {
  console.log('¡Hola ' + nombre + ', bienvenido!');
}
saludarPersona('Joaco');

//C
function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}
const resultado1 = esMayorDeEdad(20);
console.log(resultado1);

//2A
const esMayorDeEdadFlecha = (edad) => {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
};
const resultado2 = esMayorDeEdadFlecha(15);
console.log(resultado2);

//B
const compararNumeros = (num1, num2) => {
  if (num1 < num2) {
    console.log('El número ' + num1 + ' es menor que ' + num2);
  } else if (num1 === num2) {
    console.log('El número ' + num1 + ' es igual que ' + num2);
  } else {
    console.log('El número ' + num1 + ' es mayor que ' + num2);
  }
};
for (let i = 0; i <= 10; i++) {
  compararNumeros(i, 5);
}

//3A
const suma = (a, b) => {
  console.log('El resultado de la suma es ' + (a + b));
};
const resta = (a, b) => {
  console.log('El resultado de la resta es ' + (a - b));
};
const operacion = (num1, num2, callback) => {
  callback(num1, num2);
};
operacion(8, 3, suma);
operacion(8, 3, resta);

//B
const operacionValidada = (num1, num2, callback) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    console.log('Debe ingresar solo números.');
    return;
  }
  callback(num1, num2);
};
operacionValidada(8, 3, suma);
operacionValidada('a', 3, resta);