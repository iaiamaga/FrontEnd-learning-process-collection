
/* 

let ordens = [
  {
    cliente: "Rortôbe",
    tipo: "compra",
    quantidade: 56,
    ativo: "NFLX34",
  },
  {
    cliente: "Rocardi",
    tipo: "compra",
    quantidade: 76,
    ativo: "AAPL34",
  },
  {
    cliente: "Raphael",
    tipo: "venda",
    quantidade: 21,
    ativo: "GOGL34",
  },
];

>>> SEM REDUCE:

let quantidadeDeOrdens = 0;

for (let i = 0; i < ordens.length; i++) {
  quantidadeDeOrdens += ordens[i].quantidade;
}

console.log(quantidadeDeOrdens); 

// Output: 153
*/


//>>> COM REDUCE:

let ordens = [
  {
    cliente: "Rortôbe",
    tipo: "compra",
    quantidade: 56,
    ativo: "NFLX34",
  },
  {
    cliente: "Rocardi",
    tipo: "compra",
    quantidade: 76,
    ativo: "AAPL34",
  },
  {
    cliente: "Raphael",
    tipo: "venda",
    quantidade: 21,
    ativo: "GOGL34",
  },
];

let totalDeOrdens = ordens.reduce(function (ordemAnterior, ordemAtual) {
  return ordemAnterior + ordemAtual.quantidade;
}, 0);

console.log(totalDeOrdens);





/*

>>> REDUCE + ARROW FUNCTION:

let totalDeOrdens = ordens.reduce((ordemAnterior, ordemAtual) => OrdemAnterior + ordemAtual.quantidade, 0);

*/