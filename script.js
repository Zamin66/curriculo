/*
alert("10% DE DESCONTO EM TODO SITE! CLIQUE EM OK PARA CONTINUAR");

var visitante = 2;
var nome = "Franchesco";

se o visitante = 2000 ganha o prêmio
if(visitante === 2000){
    alert ("Parabéns "+nome+", você ganhou 20% de desconto");
    }else{
        alert( "Não foi dessa vez");

*/
    

    //obtém o componente do menu do celular (icone)
    var celular = document.querySelector('.celular');
    //obtem lista
    var listaMenu = document.querySelector('.menu ul');

    //evento de click no menu
    celular.addEventListener('click', function(){
        listaMenu.classList.toggle('mostraMenu');
    });
    
    let tamanhoFonte= 25;

function mudarTamanhoFonte(soma) {
	  tamanhoFonte = tamanhoFonte + soma;
	  document.body.style.fontSize = tamanhoFonte + 'px';
	}

function toggleContrast() {
      document.body.classList.toggle('high-contrast');
    }

function lerTexto() {
      const text = document.querySelector('main').innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      speechSynthesis.speak(utterance);
    }

function resetAcessibilidade() {
	  document.body.classList.remove('high-contrast', 'grayscale', 'daltonismo');
	  tamanhoFonte = 25;
	  document.body.style.fontSize = tamanhoFonte + 'px';
	  speechSynthesis.cancel();
	}    