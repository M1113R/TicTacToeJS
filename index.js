let campo = document.querySelectorAll('.campo');
campo = Array.from(campo);

let jogadorAtual = "X";

let possiveisCombinacoes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function verificarVitoria(){
    possiveisCombinacoes.forEach(function(combinacao){
        let check = combinacao.every(posicao => campo[posicao].innerText.trim() == jogadorAtual);
        if(check){
            vencedorCampo(combinacao);
            document.getElementById("win").innerHTML = "O jogador " + jogadorAtual + " venceu!!!";
            
        }
    })
}

function vencedorCampo(combinacao){
    combinacao.forEach(function(posicao){
        campo[posicao].classList.add("vencedor");
    })
}

campo.forEach(function(campo){
    campo.addEventListener('click', function(){
        if(campo.innerText.trim() != "") return
        campo.innerText = jogadorAtual
        verificarVitoria()
        jogadorAtual = jogadorAtual == "X" ? "O" : "X"
    })
})