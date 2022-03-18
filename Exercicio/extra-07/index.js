const celular = 71999918888;
const celularString = `${celular}`;

let arrayCelular = celularString.split("");
console.log(arrayCelular.length);

if (arrayCelular.length === 11) {
  //Tem tudo
  arrayCelular.splice(0, 0, "(");
  arrayCelular.splice(3, 0, ")");
  arrayCelular.splice(4, 0, " ");
  arrayCelular.splice(6, 0, " ");
  arrayCelular.splice(11, 0, "-");
  console.log(arrayCelular.join(""));
} else if (arrayCelular.length === 9) {
  //Não Tem DDD
  arrayCelular.splice(1, 0, " ");
  arrayCelular.splice(6, 0, "-");
  console.log(arrayCelular.join(""));
} else if (arrayCelular.length === 8) {
  //Não tem o 9
  arrayCelular.unshift("9");
  arrayCelular.splice(1, 0, " ");
  arrayCelular.splice(6, 0, "-");
  console.log(arrayCelular.join(""));
}