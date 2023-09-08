let i = 0; // Variável de pontuação
let isPipeCounted = false; // Flag para verificar se o cano já foi contado


// Função para reiniciar o jogo
function reiniciarJogo() {
    const pipe = document.querySelector('.pipe');
    const mario = document.querySelector('.mario');
    const gameOverCard = document.getElementById('game-over-card');
    gameOverCard.style.display = 'none';

    mario.src = './imagens/mario.gif';

    i = 0;
    const score = document.getElementById('sco');
    score.innerHTML = i;

    // Reposicione os elementos do jogo para a posição inicial
    pipe.style.left = '100%'; // Posicione o cano fora da tela
    mario.style.bottom = '0'; // Posicione o Mario na posição inicial
    mario.style.width = "150px";

    // Remova a propriedade de animação atual do estilo inline
    mario.style. animation = '';
    pipe.style.animation = '';
    pipe.style.left = '';

    // Adicione a classe 'animation-pipe' ao elemento 'pipe'
    pipe.classList.add('animation-pipe'); // Adicione a classe 'animation-pipe' com a nova animação
    // Redefina isPipeCounted para false
    isPipeCounted = false;
    // Adicione novamente o evento de teclado para o salto do Mario
    document.addEventListener('keydown', jump);
    inicioJogo(); 
}

// Função para game over
function gameOver() {
    const pontuacaoGameOver = document.getElementById('pontuacao-game-over');
    pontuacaoGameOver.textContent = i;

    const gameOverCard = document.getElementById('game-over-card');
    gameOverCard.style.display = 'block';

    // Remova o evento de teclado para o salto do Mario durante o game over
    document.removeEventListener('keydown', jump);
}

function atualizarPontuacao(pontos) {
    const scoreElement = document.getElementById('sco');
    scoreElement.innerHTML = pontos;
}


// Função para lidar com o salto do Mario
function jump() {
    const mario = document.querySelector('.mario');
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

// Função principal do jogo
function inicioJogo() {
    const pipe = document.querySelector('.pipe');
    const mario = document.querySelector('.mario');
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const pipePosition = pipe.offsetLeft;

    pipe.classList.add('animation-pipe');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        // Lógica de game over
        pipe.style.animation = 'nome'; // Substitua 'nome' pela animação do game over
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.left = '50px';

        // Chame a função de game over
        gameOver();
        
        // Pare o loop do jogo
        clearInterval(loop);

        // Reset da pontuação
        i = 0;
        atualizarPontuacao(i);
        isPipeCounted = false;
        console.log(loop)
    } else if(pipePosition<-20){
        console.log('Passei por aqui!' +i);
        // O cano passou pelo Mario e ainda não foi contado
        i += 8; // Incrementar a pontuação em 8 pontos
        atualizarPontuacao(i); // Atualize a pontuação no HTML
        isPipeCounted = true;
    }
    
}

document.addEventListener('DOMContentLoaded', () => {
    let loop;

    // Adicione o evento de teclado para o salto do Mario
    document.addEventListener('keydown', jump);

    // Inicie o loop do jogo
    loop = setInterval(inicioJogo, 10);
    
    // Outras configurações iniciais do jogo, se necessário
});

// Adicione um ouvinte de evento ao botão de reinício
document.getElementById('reiniciar').addEventListener('click', reiniciarJogo);
