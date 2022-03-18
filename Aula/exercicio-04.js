function inverte(string) {
  let array = string.split(""); //Passando string vazia ele vai quebrar em todas as letras.
  array.reverse();

  let resultadoFinal = "";

  for (let letra of array) {
    resultadoFinal += letra;
  }

  console.log(resultadoFinal);
}

inverte("Eu amo Chocolate!")