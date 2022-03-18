const email = "aluno@cubos.academy";

//Arroba
temArroba = email.includes("@");

//.
let naoTemPontoErrado;

let ultimaOco = email.lastIndexOf(".");
let primeiraOco = email.indexOf(".");

if (ultimaOco === email.length - 1 || primeiraOco === email.length - email.length) {
  naoTemPontoErrado = false;
} else if (ultimaOco === -1 && primeiraOco === -1) {
  naoTemPontoErrado = false;
} else {
  naoTemPontoErrado = true;
}

//Final
if (naoTemPontoErrado && temArroba) {
  console.log("E-mail válido");
} else {
  console.log("E-mail inválido");
}
