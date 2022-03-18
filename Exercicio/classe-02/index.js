function formataCPF(string) {
  let arrayCPF = string.split("");

  if (arrayCPF.length < 11) {
    console.log("CPF Inválido");
  } else {
    arrayCPF.splice(3, 0, ".");
    arrayCPF.splice(7, 0, ".");
    arrayCPF.splice(11, 0, "-");
    console.log(arrayCPF.join(""));
  }
}

function formataCNPJ(string) {
  let arrayCPF = string.split("");

  if (arrayCPF.length < 14) {
    console.log("CNPJ Inválido");
  } else {
    arrayCPF.splice(2, 0, ".");
    arrayCPF.splice(6, 0, ".");
    arrayCPF.splice(10, 0, "/");
    arrayCPF.splice(15, 0, "-");
    console.log(arrayCPF.join(""));
  }
}

const cpf = "12345678900";
const cnpj = "12345678000199";

formataCPF(cpf);
formataCNPJ(cnpj);