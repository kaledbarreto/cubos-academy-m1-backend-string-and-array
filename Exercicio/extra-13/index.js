function validacaoArquivos(arquivo) {
  verifica = nomeArquivo.split(".");
  if (verifica[verifica.length - 1] === "jpg" || verifica[verifica.length - 1] === "jpeg" || verifica[verifica.length - 1] === "gif" || verifica[verifica.length - 1] === "png") {
    console.log("Arquivo válido");
  } else {
    console.log("Arquivo inválido");
  }
}

const nomeArquivo = 'Foto da Familia.pdf';
validacaoArquivos(nomeArquivo);