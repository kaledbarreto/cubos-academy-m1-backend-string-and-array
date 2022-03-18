function dividirGrupos(string, tamanhoDoGrupo) {
  console.log(`Grupo 1: ${string.slice(0, tamanhoDoGrupo)}.`);
  console.log(`Grupo 2: ${string.slice(tamanhoDoGrupo, tamanhoDoGrupo.length)}.`);

}

const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda'];
const tamanhoDoGrupo = 4;

dividirGrupos(nomes, tamanhoDoGrupo);