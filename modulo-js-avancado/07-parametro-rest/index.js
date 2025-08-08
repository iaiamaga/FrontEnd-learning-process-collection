function apresentarPessoas(saudacao, pontuacao, ...nomes) { 
  for (let nome of nomes) {
    console.log(`${saudacao}, ${nome}${pontuacao}`);
  }
}

apresentarPessoas("Olá pessoas. Me chamo", ":", "Julius", "Luiza", "Xuxa", "Daniel");

// Por que o console.log está dentro da função?	Porque só lá dentro a função sabe quais valores recebeu (os argumentos)

// Por que eu passo os valores na chamada?	
// Porque a função depende desses valores pra saber o que imprimir;

// Por que o console.log fora da função dá erro?	Porque as variáveis usadas estão dentro da função, fora dela elas não existem

/* Sintaxe:

function(a, b, ...args) {
  ...
}

>>> Considere a função abaixo:

function incentivarQuester(mensagem, nomeQuester) {
  console.log(`${mensagem} ${nomeQuester}`);
}

incentivarQuester(
  "Parabéns por ter chegado ao módulo de JavaScript avançado,",
  "Pablo"
);

>>> Agora imagine que a gente queira imprimir a mesma mensagem para mais de um quester. Para isso utilizamos o REST:

*/

// function incentivarQuesters(mensagem, ...nomesQuesters) {
//   nomesQuesters.map((nomeQuester) => console.log(`${mensagem} ${nomeQuester}`));
// }

// incentivarQuesters(
//   "Parabéns por ter chegado ao módulo de JavaScript avançado,",
//   "Pablo",
//   "Lizzy",
//   "Ricardo",
//   "Roberto"
// );
