function encontrarCarro(carros, posicao) {
  encontrado = carros.slice(posicao, posicao + 3);
  printCarros = encontrado.join(' - ');
  console.log(printCarros);
}


const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

encontrarCarro(nomes, posicao);
