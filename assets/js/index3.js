const digitosecretoA1 = 9;
const digitosecretoA2 = 1;
const digitosecretoA3 = 1;

const digitosecretoB1 = 7;
const digitosecretoB2 = 1;
const digitosecretoB3 = 4;

const primerValor = document.querySelector("#input1");
const segundoValor = document.querySelector("#input2");
const tercerValor = document.querySelector("#input3");
const boton = document.querySelector("#btn");
const resultado = document.querySelector("#resultado");

boton.addEventListener("click", function() {
    const valor1 = primerValor.value;
    const valor2 = segundoValor.value;
    const valor3 = tercerValor.value;

    //console.log("Valor 1:", valor1);
    //console.log("Valor 2:", valor2);
    //console.log("Valor 3:", valor3);

    if (valor1 == digitosecretoA1 && valor2 == digitosecretoA2 && valor3 == digitosecretoA3) {
        resultado.textContent = "Password 1 correcto";
    } else if (valor1 == digitosecretoB1 && valor2 == digitosecretoB2 && valor3 == digitosecretoB3) {
        resultado.textContent = "Password 2 correcto";
    } else {
        resultado.textContent = "Password incorrecto";
    }
});