const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

let posicao = livros.indexOf(nomeDoLivro);
if (posicao !== -1) {
  console.log(`O livro está na posição ${posicao + 1}.`);
} else {
  console.log("Livro não encontrado.")
}