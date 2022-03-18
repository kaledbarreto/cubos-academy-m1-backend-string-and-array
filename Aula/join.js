function inverte(string) {
  let array = string.split(""); //Passando string vazia ele vai quebrar em todas as letras.
  array.reverse();

  console.log(array.join(""));
}

inverte("Eu amo Chocolate!");