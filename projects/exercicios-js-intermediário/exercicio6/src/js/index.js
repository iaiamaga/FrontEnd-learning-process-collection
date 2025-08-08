/*ao clicar em uma pergunta deve acontecer
uma animação de acordeon para abrir o item
e mostrar o texto escondido, e a seta deve
mudar de cor.
ao clicar em um item para abri-lo todos os
outros itens devem ser fechados. */

const itensPerguntasERespostas = document.querySelectorAll(".item");

itensPerguntasERespostas.forEach(function(item) {
    item.addEventListener("click", function() {

        const itemAtivoAtual = document.querySelector(".ativo");

        if (itemAtivoAtual) {
            itemAtivoAtual.classList.remove("ativo");
        }

        item.classList.add("ativo");
    });
});
