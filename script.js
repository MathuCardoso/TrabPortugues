var perguntas = document.getElementsByClassName('blocos');
var reset = document.getElementById('limpar');

for (var i = 0; i < perguntas.length; i++) {

    function typeWriter(elemento) {

        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
          setTimeout(() => elemento.innerHTML += letra, 35 * i);
        });

      }


        var resposta = document.getElementById('answer');
       
        

        perguntas[i].addEventListener('click', function(event) {
        var pergunta = event.currentTarget.textContent.split('-')[0].trim();

        if (pergunta === '1') {
            resposta.textContent = 'Olá, tudo bem? Eu sou a Carolina Maria de Jesus, uma escritora brasileira que nasceu em 1914 e ficou conhecida por meu livro "Quarto de Despejo: Diário de uma Favelada", que conta minha vida e experiências vivendo na favela do Canindé, em São Paulo, na década de 1960.';
            typeWriter(resposta);
        } else if(pergunta === '2') {
            resposta.textContent = 'Eu tive três filhos. Os nomes deles eram José Carlos, João José, e Vera Eunice. Minha experiência como mãe solteira e a responsabilidade de cuidar de meus filhos eram aspectos importantes da minha vida e estiveram presentes em muitas das minhas escritas em meu diário.';
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
            resposta.textContent = 'Viver com a constante escassez de comida era uma realidade dolorosa. Eu vasculhava restos de comida e lixo em busca de qualquer coisa que pudesse alimentar meus filhos e eu. A alegria de comer um pedaço de carne era rara e especial. Não havia conforto nem regalias; nossa luta diária era pura e simplesmente pela sobrevivência.';
            typeWriter(resposta);
        }else if(pergunta === '7') {
            resposta.textContent = 'Em 1958, Audálio Dantas visitou a favela do Canindé e presenciou uma discussão entre mim e meus vizinhos. Eu os ameacei, dizendo que os colocaria em meu livro se continuassem me importunando. Isso chamou a atenção dele, e ele descobriu o material que eu havia produzido. Isso foi um ponto de viragem na minha vida, pois levou à publicação do meu livro "Quarto de Despejo".';
            typeWriter(resposta);
        }else if(pergunta === '8') {
            resposta.textContent = 'A parte mais desafiadora da minha jornada de escrita foi a luta constante para encontrar tempo e recursos para escrever em meio às duras condições da minha vida na favela do Canindé, em São Paulo. Como mãe solteira de três filhos, equilibrar minhas responsabilidades como cuidadora com a escrita era uma tarefa árdua. Encontrar tempo para escrever diariamente era complicado, já que minha prioridade era garantir que meus filhos tivessem o necessário para sobreviver. Além disso, a falta de materiais de escrita, condições de vida precárias na favela, exposição às intempéries e minhas limitações educacionais tornaram a escrita um desafio constante. No entanto, minha determinação em compartilhar as realidades da vida na favela e dar voz aos excluídos me impulsionou a continuar escrevendo. O encontro com o jornalista Audálio Dantas, que me propôs a ideia de publicar meu diário, foi um momento crucial que abriu portas para a divulgação das minhas palavras e experiências. Minha jornada de escrita foi marcada por obstáculos, mas também pela resiliência e pelo desejo de fazer uma diferença na sociedade ao destacar as questões sociais e econômicas que afetavam a população de baixa renda.';
            typeWriter(resposta);
        }else if(pergunta === '9') {
            resposta.textContent = 'Foi uma mistura de emoções intensas. Ver meu livro publicado e reconhecido foi incrível, e o sucesso que ele alcançou foi gratificante. Ele foi traduzido para várias línguas, o que me encheu de orgulho.';
            typeWriter(resposta);
        }else if(pergunta === '10') {
            resposta.textContent = 'O processo de documentar o cotidiano da favela em meu diário foi desafiador, porém essencial para minha missão de dar voz aos marginalizados. Observava atentamente, registrando detalhes das condições de vida, lutas das famílias e interações com moradores. Mantive o hábito de escrever diariamente, muitas vezes à noite, usando papel simples devido à falta de recursos. Minha escrita refletia honestamente as dificuldades e momentos de esperança. Encontrei resistência e apoio na comunidade; alguns viam minha escrita como invasão de privacidade, enquanto outros a encorajavam. O jornalista Audálio Dantas se tornou um importante apoiador. Minha missão era conscientizar o mundo sobre as condições das favelas e dar voz aos marginalizados, acreditando que a escrita poderia promover mudanças sociais. Em resumo, minha jornada de documentação no diário foi desafiadora, mas crucial para chamar a atenção para as questões sociais e econômicas em nossa comunidade, impulsionada por minha determinação e compromisso com a verdade e a justiça.';
            typeWriter(resposta);
        }else if(pergunta === '11') {
            resposta.textContent = 'Escrever na favela era desafiador devido à falta de recursos, como papel e caneta. Mas eu usava o que tinha à mão, muitas vezes escrevendo em pedaços de papel encontrados no lixo, porque acredito que a escrita é uma forma poderosa de expressão.';
            typeWriter(resposta);
        }else if(pergunta === '12') {
            resposta.textContent = 'Escrever na favela era desafiador devido à falta de recursos, como papel e caneta. Mas eu usava o que tinha à mão, muitas vezes escrevendo em pedaços de papel encontrados no lixo, porque acredito que a escrita é uma forma poderosa de expressão.';
            typeWriter(resposta);
        }else {
            resposta.textContent = 'Fala direito filha da puta';
            typeWriter(resposta);

        }
    });
}



