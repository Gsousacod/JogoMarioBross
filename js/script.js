document.addEventListener('DOMContentLoaded', () => {
    let i = 0; // Inicialize a variável de pontuação
    let isPipeCounted = false;
    const mario = document.querySelector('.mario');
    
    const jump = () => {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
    
    document.addEventListener('keydown', jump);
    
    const loop = setInterval(() => {
        const pipe = document.querySelector('.pipe');
        const mario = document.querySelector('.mario');
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const pipePosition = pipe.offsetLeft;
    
        console.log(marioPosition);
    
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            // Game over logic
            pipe.style.animation = 'nome'; // Replace 'nome' with your animation name
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = './imagens/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';
    
            clearInterval(loop);
            
            
            // Reset the score to zero
            i = 0;
            const score = document.getElementById('sco');
            score.innerHTML = i;
            isPipeCounted = false;
        } else if (pipePosition < -20) {
            // Pipe passed the Mario
            i++; // Increment the score
            const score = document.getElementById('sco');
            score.innerHTML = i;
            isPipeCounted = true;
        }
    }, 10);
});

function gameOver() {
    // Pare o loop do jogo ou a animação do Mario, se necessário
    clearInterval(loop);
    
    // Atualize o texto da pontuação no card de game over
    const pontuacaoGameOver = document.getElementById('pontuacao-game-over');
    pontuacaoGameOver.textContent = i;
    
    // Mostre o card de game over
    const gameOverCard = document.getElementById('game-over-card');
    gameOverCard.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    // ... Outro código do jogo ...

    // Adicione um ouvinte de evento ao botão de reinício
    const botaoReiniciar = document.getElementById('reiniciar');
    botaoReiniciar.addEventListener('click', reiniciarJogo);
    
    // Função para reiniciar o jogo
    function reiniciarJogo() {
        // Esconda o card de game over
        const gameOverCard = document.getElementById('game-over-card');
        gameOverCard.style.display = 'none';
        
        // Coloque aqui a lógica para reiniciar o jogo
        // Isso pode incluir a redefinição da pontuação, reposicionar elementos, etc.
        // Depois de reiniciar o jogo, você pode chamar a função que começa o jogo novamente.
    }
});

