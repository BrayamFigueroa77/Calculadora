// let titulo = document.getElementById("titulo");
// let a =document.getElementById("a");
// let b =document.getElementById("b");
// let buttonsumar = document.getElementById("buttonsumar");
// let c =document.getElementById("c");

// buttonsumar.addEventListener("click", (ev)=>{
//     let num1 = Number(a.value);
//     let num2 = Number(b.value);
//     c.value = num1+num2;
//     });


/////////////////////////////////////////////////////////////////////////////////


// let resultado = document.getElementById("resultado");
// let aux = "";
// let num1 = null;
// let operador = null;

// function unir(value) {
//     aux += value; // Concatenar el nuevo valor
//     resultado.value = aux; // Actualizar el campo de resultado
// }

// document.getElementById("numero0").addEventListener("click", () => unir("0"));
// document.getElementById("numero1").addEventListener("click", () => unir("1"));
// document.getElementById("numero2").addEventListener("click", () => unir("2"));
// document.getElementById("numero3").addEventListener("click", () => unir("3"));
// document.getElementById("numero4").addEventListener("click", () => unir("4"));
// document.getElementById("numero5").addEventListener("click", () => unir("5"));
// document.getElementById("numero6").addEventListener("click", () => unir("6"));
// document.getElementById("numero7").addEventListener("click", () => unir("7"));
// document.getElementById("numero8").addEventListener("click", () => unir("8"));
// document.getElementById("numero9").addEventListener("click", () => unir("9"));

// function limpiar() {
//     aux = "";
//     resultado.value = 0;
// }
// document.getElementById("buttonAC").addEventListener("click", () => limpiar());

// function calcular(valor) {
//     if (aux =! "") {
//         let num1 = Number(aux.value);
//         limpiar();
//         let num2 = Number(aux.value);

//         switch (document.getElementById("button+")) {
//             case valor:
//                 let suma = num1+num2;
//                 resultado = suma;
//                 break;
        
//             default:
//                 break;
//         }
//     }
// }
// document.getElementById("button+").addEventListener("click", () => calcular("+"));

/////////////////////////////////////////////////////////////////////////////

let resultado = document.getElementById("resultado");
let aux = "";
let num1 = null;
let operador = null;

function unir(value) {
    // Verificar si el valor es un punto y si ya existe en aux
    if (value === "." && aux.includes(".")) {
        return; // No añadir otro punto si ya existe
    }
    aux += value; // Concatenar el nuevo valor
    resultado.value = aux; // Actualizar el campo de resultado
}

// Añadir eventos a los botones numéricos
for (let i = 0; i <= 9; i++) {
    document.getElementById(`numero${i}`).addEventListener("click", () => unir(i.toString()));
}
document.getElementById("punto_decimal").addEventListener("click", () => unir("."));

function limpiar() {
    aux = "";
    resultado.value = "0";
    num1 = null;
    operador = null;
}

document.getElementById("buttonAC").addEventListener("click", () => limpiar());

function calcular(valor) {
    if (aux !== "") {
        let num2 = Number(aux); // Obtener el segundo número
        if (num1 === null) {
            num1 = num2; // Si es la primera operación, guardar el primer número
        } else {
            // Realizar cálculo con el operador anterior
            switch (operador) {
                case "+":
                    num1 += num2; // Sumar
                    break;
                case "-":
                    num1 -= num2; // Restar
                    break;
                case "*":
                    num1 *= num2; // Multiplicar
                    break;
                case "/":
                    if (num2 !== 0) {
                        num1 /= num2; // Dividir
                    } else {
                        resultado.value = "Error"; // Manejo de división por cero
                        return;
                    }
                    break;
                case "%":
                    num1 *= num2 / 100; // Porcentaje
                    break;
                default:
                    break;
            }
        }
        resultado.value = num1;
        aux = ""; // Limpiar auxiliar para siguiente entrada
    }
    operador = valor; // Guardar operador para la siguiente operación
}

// Añadir eventos a los botones de operación
document.getElementById("button+").addEventListener("click", () => calcular("+"));
document.getElementById("button-").addEventListener("click", () => calcular("-"));
document.getElementById("button*").addEventListener("click", () => calcular("*"));
document.getElementById("button/").addEventListener("click", () => calcular("/"));
document.getElementById("button%").addEventListener("click", () => calcular("%"));

// Calcular resultado final al presionar "="
document.getElementById("button=").addEventListener("click", () => {
    if (num1 !== null && aux !== "") {
        let num2 = Number(aux);
        switch (operador) {
            case "+":
                num1 += num2; // Sumar
                break;
            case "-":
                num1 -= num2; // Restar
                break;
            case "*":
                num1 *= num2; // Multiplicar
                break;
            case "/":
                if (num2 !== 0) {
                    num1 /= num2; // Dividir
                } else {
                    resultado.value = "Error"; // Manejo de división por cero
                    return;
                }
                break;
            default:
                break;
        }
        resultado.value = num1; // Mostrar resultado final
        aux = ""; // Limpiar auxiliar para siguiente entrada
        operador = null; // Resetear operador para nueva operación
    }
});
