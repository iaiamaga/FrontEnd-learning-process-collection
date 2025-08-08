/* 
objetivo 1 - quando o usuario clicar no botao de ver trailer, devemos abrir a modal com o video do trailer.
    - passo 1: dar um jeito de pegar o elemento que representa o botao na tela usando js
    - passo 2:dar um jeito de identificar quando o usuario clicar no botao
    - passo3: dar um jeito de pegar o elemento modal no js
    -passo 4: abrir a modal na tela

objetivo 2 - quando o usuario clicar no x devemos fechar a modal.
    -passo 1: dar um jeito de pegar o elemento de fechar modal
    -passo 2: dar um jeito de identificar quando o usuario clicar no x 
    -passo 3: fechar modal
*/

const botaoTrailer = document.querySelector(".botao-trailer");
const botaofecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal =document.querySelector (".modal");
const linkDoVideo = video.src; 

function alternarModal() {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener ("click", () => {
   alternarModal();
    video.setAttribute ("src", linkDoVideo)
});  

botaofecharModal.addEventListener ("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});

