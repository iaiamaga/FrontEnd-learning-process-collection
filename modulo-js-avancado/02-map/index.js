/* SEM MAP 

let pessoas = [
  { nome: "Eu", idade: 23 },
  { nome: "Lizzy", idade: 19 },
  { nome: "Roberto", idade: 33 },
];

let nomeDasPessoas = [];

for (let i = 0; i < pessoas.length; i++) {
  nomeDasPessoas.push(pessoas[i].nome);
}

console.log(nomeDasPessoas);

*/

// COM MAP

let pessoas = [
  { nome: "Eu", idade: 23 },
  { nome: "Lizzy", idade: 19 },
  { nome: "Roberto", idade: 33 },
];

let nomeDasPessoas = pessoas.map(function (pessoa) {
  return pessoa.nome + " têm " + pessoa.idade + " anos de idade";
});

console.log(nomeDasPessoas);


