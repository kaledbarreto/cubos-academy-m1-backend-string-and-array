let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

//Identificador
identificador = identificador.padStart(6, "0");

//Nome
let nomesArray = nome.split(" ");
for (let i = 0; i < nomesArray.length; i++) {
  nomesLetrasArray = nomesArray[i].split("");
  letraMaiuscula = nomesLetrasArray.shift();
  letraMaiuscula = letraMaiuscula.toUpperCase();
  nomesLetrasArray.unshift(letraMaiuscula);
  nomesArray[i] = nomesLetrasArray.join("");
}
nome = nomesArray.join(" ");

//Email
email = email.trim();

//Tags
tags = tags.join(", ");

//console.log()
console.log(identificador);
console.log(nome);
console.log(email);
console.log(tags);