/* ESTRUTURA DE UMA FUNÇÃO ANÔNIMA:

let resultadoDaSoma = function (numero1, numero2) {
  return numero1 + numero2;
};

console.log(resultadoDaSoma(12, 2));
*/

/* ESTRUTURA DE UMA ARROW FUNCTION:*/

let resultadoDaSoma = (numero1, numero2) => numero1 + numero2;

console.log(resultadoDaSoma(12, 2));

// OUTRO EXEMPLO:
const incentivarQuester = (nomeQuester) =>
  console.log(
    "Parabéns, " + nomeQuester + ", você chegou ao módulo de JS Intermediário!"
  );

incentivarQuester("Lichtle");
