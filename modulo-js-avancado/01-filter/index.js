

/* FILTRAR RESULTADOS SEM USAR O FILTER:

let pessoasMaioresDe20Anos = [];

for (i = 0; i < pessoas.length; i++) {
  if (pessoas[i].idade > 20) {
    pessoasMaioresDe20Anos.push(pessoas[i]);
  }
}

console.log(pessoasMaioresDe20Anos);

*/

// FILTRAR RESULTADOS USANDO O FILTER:

let pessoas = [
  { nome: "Eu", idade: 23 },
  { nome: "Lizzy", idade: 19 },
  { nome: "Roberto", idade: 33 },
];

let pessoasMaioresDe20Anos = pessoas.filter(function (pessoa) {
  return pessoa.idade > 20; // Condição a ser testada
});

console.log(pessoasMaioresDe20Anos);

