const original = "1,350,000";

let resultado = original;
let resultadoAnterior = "";

while (resultado !== resultadoAnterior) {
  resultadoAnterior = resultado;
  resultado = resultado.replace(",", ".");

}

console.log(resultado);