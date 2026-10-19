//1A
function saludar (){
	console.log ('¡Hola, bienvenido!')
}
saludar()

//B
function saludarPersona(nombre){
  console.log(`¡Hola ${nombre}, bienvenido!`);
}
saludarPersona("Joaco");

//C
function esMayorDeEdad(edad){
  if (edad >= 18) {
    return true;
  } 
  else {
    return false;
  }
}
const resultadoC = esMayorDeEdad(20);
console.log(resultadoC);

//2A
const esMayorDeEdad = (edad) => {
  if (edad >= 18) {
    return true;
  } 
  else {
    return false;
  }
};
const resultadoA = esMayorDeEdad(15);
console.log(resultadoA);

//B
const compararNumeros = (num1, num2) => {
  if (num1 < num2) {
    console.log(`El número ${num1} es menor que ${num2}`);
  } 
    else if (num1 === num2) {
    console.log(`El número ${num1} es igual que ${num2}`);
    } 
    else {
        console.log(`El número ${num1} es mayor que ${num2}`);
    }
};
for (let i = 0; i <= 10; i++) {
  compararNumeros(i, 5);
}

//3A
const suma = (a, b) => {
  console.log(`El resultado de la suma es ${a + b}`);
};
const resta = (a, b) => {
  console.log(`El resultado de la resta es ${a - b}`);
};
const operacion = (num1, num2, callback) => {
  callback(num1, num2);
};
operacion(8, 3, suma);
operacion(8, 3, resta);

//B
const operacion2 = (num1, num2, callback) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("Debe Ingresar Solo Números.");
    return;
  }
  callback(num1, num2);
};
operacion2(8, 3, suma); 
operacion2("a", 3, resta);