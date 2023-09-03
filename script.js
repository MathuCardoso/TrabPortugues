var perguntas = document.getElementsByClassName('blocos');

for (var i = 0; i < perguntas.length; i++) {

    var input = document.getElementById('input');

    function typeWriter(elemento) {

        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
          setTimeout(() => elemento.innerHTML += letra, 30 * i);
        });

      }
        var resposta = document.getElementById('answer');
       

        perguntas[i].addEventListener('click', function(event) {
        var pergunta = event.currentTarget.textContent.split('-')[0].trim();

        if (pergunta === '1') {
            resposta.textContent = 'Olá, tudo bem? Eu sou a Carolina Maria de Jesus, uma escritora brasileira que nasceu em 1914 e ficou conhecida por meu livro "Quarto de Despejo: Diário de uma Favelada", que conta minha vida e experiências vivendo na favela do Canindé, em São Paulo, na década de 1960.';
            typeWriter(resposta);
        } else if(pergunta === '2') {
            resposta.textContent = 'Eu, Carolina Maria de Jesus, nasci em Sacramento, no estado de Minas Gerais, Brasil, em 14 de março de 1914. Minha cidade natal é um lugar que marcou o início da minha vida, mas grande parte da minha história e das minhas experiências significativas ocorreram em São Paulo, na favela do Canindé, onde vivi por muitos anos e escrevi meu famoso livro "Quarto de Despejo".';
            typeWriter(resposta);
        }

        else {
            resposta.textContent = 'Fala direito filha da puta';
            typeWriter(resposta);

        }
    });
}

