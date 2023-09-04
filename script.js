var perguntas = document.getElementsByClassName('blocos');

for (var i = 0; i < perguntas.length; i++) {

    var input = document.getElementById('input');

    function typeWriter(elemento) {

        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
          setTimeout(() => elemento.innerHTML += letra, 32 * i);
        });

      }
        var resposta = document.getElementById('answer');
       

        perguntas[i].addEventListener('click', function(event) {
        var pergunta = event.currentTarget.textContent.split('-')[0].trim();

        if (pergunta === '1') {
            resposta.textContent = 'Olá, tudo bem? Eu sou a Carolina Maria de Jesus, uma escritora brasileira que nasceu em 1914 e ficou conhecida por meu livro "Quarto de Despejo: Diário de uma Favelada", que conta minha vida e experiências vivendo na favela do Canindé, em São Paulo, na década de 1960.';
            typeWriter(resposta);
        } else if(pergunta === '2') {
            resposta.textContent = 'Tive três filhos de pais diferentes e sempre deixei claro em meus escritos que nunca desejei me casar. Não tive marido.';
            typeWriter(resposta);
        } else if(pergunta === '3') {
            resposta.textContent = 'O "Quarto de Despejo" era o barraco onde eu vivia com meus filhos na favela de Canindé, São Paulo. Era um lugar precário, sem saneamento, conforto ou higiene adequada. Chamei-o assim porque me sentia como um objeto descartado pela sociedade. Meu livro "Quarto de Despejo: Diário de uma Favelada" documenta nossas lutas diárias contra a fome e a miséria, destacando as condições desumanas das favelas e as dificuldades enfrentadas por pessoas marginalizadas no Brasil.';
            typeWriter(resposta);
        }else if(pergunta === '4') {
            resposta.textContent = 'Enfrentar o preconceito não foi fácil. Muitos no meio intelectual não aceitavam que uma mulher negra e ex-favelada pudesse ser uma escritora respeitada. No entanto, eu resisti. Continuei escrevendo e defendendo minha voz e minhas experiências, mostrando que a literatura não tem barreiras de classe ou cor.';
            typeWriter(resposta);
        }else if(pergunta === '5') {
            resposta.textContent = 'Para sustentar minha família, eu começava a coletar papel. Guardava revistas, livros e qualquer material que pudesse ser lido e que encontrava em meu caminho durante minhas longas jornadas como catadora. Também reservava um pedaço de papel para que eu pudesse continuar escrevendo e registrando minhas experiências. Era uma luta constante, mas essa era uma das maneiras que encontrei para colocar comida na mesa e continuar minha jornada como escritora.';
            typeWriter(resposta);
        }else if(pergunta === '6') {
            resposta.textContent = 'Para sustentar minha família, eu começava a coletar papel. Guardava revistas, livros e qualquer material que pudesse ser lido e que encontrava em meu caminho durante minhas longas jornadas como catadora. Também reservava um pedaço de papel para que eu pudesse continuar escrevendo e registrando minhas experiências. Era uma luta constante, mas essa era uma das maneiras que encontrei para colocar comida na mesa e continuar minha jornada como escritora.';
            typeWriter(resposta);
        }else {
            resposta.textContent = 'Fala direito filha da puta';
            typeWriter(resposta);

        }
    });
}

