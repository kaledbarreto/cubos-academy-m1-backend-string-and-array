const comentario = "Esse COVID é muito perigoso!";

comentarioUC = comentario.toUpperCase();

if (comentarioUC.includes("COVID") || comentarioUC.includes("PANDEMIA")) {
  console.log("Comentário bloqueado por conter palavras proibidas");
} else {
  console.log("Comentário autorizado");
}