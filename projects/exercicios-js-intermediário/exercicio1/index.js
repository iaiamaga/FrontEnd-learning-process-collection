let botao = document.querySelector('button')
let quadradoMudar = document.getElementById("quadrado-q-muda");

botao.addEventListener("click", function(){
  
    if(quadradoMudar.style.background == 'purple'){
        quadradoMudar.style.background = 'yellow'
    }else{
        quadradoMudar.style.background = 'purple'
    }
})
