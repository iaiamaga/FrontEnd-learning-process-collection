const caixaDeTexto = document.querySelectorAll(".input-texto");

caixaDeTexto.forEach(input => {
    input.addEventListener('change', () => {
        if(input.value !== ""){
            input.classList.add("caixa-preenchida")
        }else{
            input.classList.remove("caixa-preenchida")
        }
        changeColor = 'green'
    })
})
