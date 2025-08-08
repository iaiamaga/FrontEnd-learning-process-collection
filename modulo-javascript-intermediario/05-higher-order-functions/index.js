// FUNÇÃO COMO PARÂMETRO DE OUTRA FUNÇÃO

const calcularAnoDeNascimento = function (
  idade,
  mesDeNascimento,
  imprimirAnoDeNascimento
) {
  const mesAtual = 10;
  let anoDeNascimento = 2022 - idade; 
  if (mesDeNascimento > mesAtual) anoDeNascimento--; 
  imprimirAnoDeNascimento(anoDeNascimento);
};

let imprimirAnoDeNascimento = (anoDeNascimento) => {
  console.log("Seu ano de nascimento é " + anoDeNascimento);
};

calcularAnoDeNascimento(23, 8, imprimirAnoDeNascimento);

// OUTRO EXEMPLO:

function mostrarNome(nome, imprimirNome) {
  imprimirNome(nome);
}

let imprimirNome = (nome) => console.log("Seu nome é " + nome + ".");

mostrarNome("Lichtle", imprimirNome);

/* FUNÇÃO QUE RETORNA OUTRA FUNÇÃO. ANALISE O EXEMPLO ABAIXO:
*/

function multiplicar(multiplicador) {
  return function (numero) {
    return numero * multiplicador;
  };
}

let dobrar = multiplicar(2);
let triplicar = multiplicar(3);
let quadruplicar = multiplicar(4);

console.log(dobrar(5));
console.log(triplicar(5));
console.log(quadruplicar(5));
