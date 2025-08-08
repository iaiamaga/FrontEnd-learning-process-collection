
let nomeFilme = "Capitão América";

switch (nomeFilme) {
  case "Vingadores":
    console.log("É o filme dos Vingadores");
    break;
  case "Coringa":
    console.log("É o filme do Coringa");
    break;
  case "Batman":
    console.log("É o filme do Batman");
    break;
  case "Capitão América":
    console.log("É o filme do Capitão América");
    break;
  default:
    console.log("É outro filme");
} 








// O break é necessário para sair do switch caso a condição seja atendida. Caso contrário, o switch continua executando até achar o break. Nesse caso isso acarretaria em todas as opções sendo impressas no console.

// Não podemos esquecer os dois pontos : após cada case.

// 

// TAMBÉM É POSSÍVEL USAR A MESMA INSTRUÇÃO PARA MAIS DE UM CASE:

let avaliacao = 3;

switch (avaliacao) {
  case 1:
  case 2:
  case 3:
    console.log("Filme ruim");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Filme mediano");
    break;
  case 7:
  case 8:
    console.log("Filme bom");
    break;
  case 9:
  case 10:
    console.log("Filme excelente");
    break;
  default:
    console.log("Não foi possível verificar a avaliação");
}
