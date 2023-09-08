document.addEventListener('DOMContentLoaded', () => {
    let i = 0; // Inicialize a variável de pontuação
    let isPipeCounted = false;
    const mario = document.querySelector('.mario');
    const botaoReiniciar = document.getElementById('reiniciar');
    const gameOverCard = document.getElementById('game-over-card');
    let loop;

    const jump = () => {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }

    document.addEventListener('keydown', jump);

    function iniciarJogo() {
        // Ocultar o card de game over
        gameOverCard.style.display = 'none';

        // Reiniciar a pontuação para zero
        i = 0;
        const score = document.getElementById('sco');
        score.innerHTML = i;

        // Reposicionar elementos do jogo para a posição inicial
        const pipe = document.querySelector('.pipe');
        pipe.style.left = '100%';
        mario.style.bottom = '0';

        // Limpar mensagens de "game over", se houver
        mario.src = './imagens/mario.gif';

        // Reiniciar a animação do Mario, se necessário
        mario.style.animation = 'nome'; // Substitua 'nome' pela animação inicial do Mario

        // Iniciar o loop do jogo
        loop = setInterval(jogoPrincipal, 10);
    }

    function reiniciarJogo() {
        iniciarJogo(); // Simplesmente chame a função de início para reiniciar o jogo
    }

    function gameOver() {
        // Parar o loop do jogo ou a animação do Mario, se necessário
        clearInterval(loop);

        // Atualizar o texto da pontuação no card de game over
        const pontuacaoGameOver = document.getElementById('pontuacao-game-over');
        pontuacaoGameOver.textContent = i;

        // Mostrar o card de game over
        gameOverCard.style.display = 'block';
    }

    function jogoPrincipal() {
        const pipe = document.querySelector('.pipe');
        const mario = document.querySelector('.mario');
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const pipePosition = pipe.offsetLeft;

        console.log(marioPosition);

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            // Lógica de fim de jogo
            pipe.style.animation = 'nome'; // Substitua 'nome' com sua animação
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './imagens/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            // Chame a função de game over
            gameOver();
        } else if (pipePosition < -20 && !isPipeCounted) {
            // Cano passou pelo Mario e não foi contabilizado ainda
            i++; // Incrementar a pontuação
            const score = document.getElementById('sco');
            score.innerHTML = i;
            isPipeCounted = true;
        }
    }

    // Iniciar o jogo quando a página é carregada inicialmente
    iniciarJogo();
});
