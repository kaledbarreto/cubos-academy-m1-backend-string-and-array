function tirarCaracteres(string) {
  limpo = string.replace(".", "");
  limpo = limpo.replace(".", "");
  limpo = limpo.replace("-", "");
  limpo = limpo.replace("/", "");

  console.log(limpo);
}

const cpf = "011.022.033-44";
tirarCaracteres(cpf);

