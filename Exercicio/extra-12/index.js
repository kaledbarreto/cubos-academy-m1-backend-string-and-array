function geradorNickname(nome) {
  let nickname;
  let arroba = "@"
  nickname = nome.toLowerCase();
  nickname = nickname.replace(" ", "");
  nickname = arroba.concat(nickname);
  nickname = nickname.substr(0, 13);
  console.log(nickname);
}

const nome = 'Guido Cerqueira';
geradorNickname(nome);