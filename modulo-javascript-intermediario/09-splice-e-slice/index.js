
//SPLICE (array.splice(a, b)):

// let frutasSelecionadas = frutas.splice(1, 3); // Pega 3 itens a partir da (e incluindo) posição 1

// console.log(frutasSelecionadas); // Output: (3) ['Maçã', 'Laranja', 'Uva']

// // Se dermos um console.log no array frutas, perceba que agora só restaram os itens que não foram incluídos no splice:

// console.log(frutas); // Output: (2) ['Banana', 'Morango']


let cores = ["Azul", "Vermelho", "Amarelo", "Verde", "Laranja"];

console.log(cores);

let removeEAdicionaCores = cores.splice(3, 2, "Lilás", "Preto", "Branco");

console.log(removeEAdicionaCores); // Exibe os itens que foram removidos

console.log(cores); // Output: (6) ["Azul", "Vermelho", "Amarelo", "Lilás", "Preto", "Branco"];
