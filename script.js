var input = document.getElementById('input');
var resposta = document.getElementById('answer');
var perguntas = document.getElementsByClassName('blocos');

for (var i = 0; i < perguntas.length; i++) {
    perguntas[i].addEventListener('click', function(event) {
        var pergunta = event.currentTarget.textContent.split('-')[0].trim();

        if (pergunta === '1') {
            resposta.textContent = 'Olá, tudo bem? Aqui é a Carolina Maria de Jesus...';
        } else {
            resposta.textContent = 'Desculpe, não entendi a pergunta.';
        }
    });
}
