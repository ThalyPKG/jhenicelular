function sim() {
    alert("Você aceitou namorar comigo! ❤️😍");
    window.location.href = "https://www.youtube.com/watch?v=0CdMqJ9Lidg";
}

function nao(botao) {
    let largura = window.innerWidth - botao.offsetWidth;
    let altura = window.innerHeight - botao.offsetHeight;

    let novaPosicaoX = Math.random() * largura;
    let novaPosicaoY = Math.random() * altura;

    botao.style.position = "absolute";
    botao.style.left = novaPosicaoX + "px";
    botao.style.top = novaPosicaoY + "px";
}
