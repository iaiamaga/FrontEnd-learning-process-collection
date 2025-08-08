const botaoGeradorDeConselhos = document.getElementById("advice-update");
let idDoConselho = document.getElementById("advice-id");
let descricaoDoConselho = document.getElementById("advice-description");


async function criarConselhoAleatorio() {
    const url = "https://api.adviceslip.com/advice";
    const resposta = await fetch(url);
    const dados = await resposta.json();
    let id = dados.slip.id;
    let texto = dados.slip.advice;

    idDoConselho.innerText = `Conselho #${id}`;
    descricaoDoConselho.innerText = `"${texto}"`;
};

botaoGeradorDeConselhos.addEventListener("click", async () => {
        try {
           await criarConselhoAleatorio();
        } catch (erro){
            console.error("xiii...Deu ruim!", erro)
        }

});





