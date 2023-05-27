let jogar = confirm("Vamos jogar 2 ou 1?");

if(jogar) {
  // Variaveis de dados do jogador
  let numeroDeVitorias = 0;
  let numeroDeDerrotas = 0;
  let numeroDeEmpates = 0;
  
  // Loop do jogo
  for(let i = 0;; i++) {

    // Pede jogada do jogador e defini jogada dos "Oponentes"
    let numeroJogador = prompt("Faça sua jogada \nOu digite 4 para sair");
    let numeroPC1 = parseInt(Math.random() * 2) + 1;
    let numeroPC2 = parseInt(Math.random() * 2) + 1;
    
    // Verifica se jogador fez uma jogada esperada
    if(numeroJogador == "1" || numeroJogador == "2") {
s
      // Verifica se PC1 e PC2 fizeram jogadas iguais e diferentes do Jogador
      // Caso aconteça o Jogador ganha
      if(numeroPC1 == numeroPC2 && numeroPC1 != numeroJogador) {
        numeroDeVitorias += 1;
        alert(`Sua jogada: ${numeroJogador}\nPC 1: ${numeroPC1}\nPC 2: ${numeroPC2}\nVocê ganhou!!! \nSeu numero de vitórias é: ${numeroDeVitorias}`);
      } else if(numeroPC1 == numeroPC2 && numeroPC1 == numeroJogador) {
        numeroDeEmpates += 1;
        alert(`Sua jogada: ${numeroJogador}\nPC 1: ${numeroPC1}\nPC 2: ${numeroPC2}\nJogada empatada!!!`);
      } else {
        numeroDeDerrotas += 1;
        alert(`Sua jogada: ${numeroJogador}\nPC 1: ${numeroPC1}\nPC 2: ${numeroPC2}\nVocê perdeu!!! \nSeu numero de derrotas é: ${numeroDeDerrotas}`);
      }
    }
    
    // Verifica se jogador quer desistir
    else if(numeroJogador == "4" || numeroJogador == null) {
        let rodadas = numeroDeVitorias + numeroDeDerrotas + numeroDeEmpates;
        alert(`Seu numero de vitórias é: ${numeroDeVitorias}\nSeu numero de derrotas é: ${numeroDeDerrotas} \nSeu numero de empates é: ${numeroDeEmpates}\nVocê jogou ${rodadas} rodadas\nAté a proxima!`);
        break;
    }
    
    // Caso o jogador faça uma ação não esperada
    // Irá informar o erro e não contara a tentativa
    else {
        alert("Jogada Inválida");
        i--;
    };
  };
  
} else {
  alert("Até a proxima!")
};