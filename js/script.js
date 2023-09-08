
let i = 0; // Inicialize a variável de pontuação
function inicioJogo(){
    const pipe = document.querySelector('.pipe');
    const mario = document.querySelector('.mario');
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const pipePosition = pipe.offsetLeft; 
    pipe.classList.add('animation-pipe');  

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        let isPipeCounted = false;
        // Game over logic
        pipe.style.animation = 'nome'; // Replace 'nome' with your animation name
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        gameOver();

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
    


}   
function gameOver(){
    const pontuacaoGameOver = document.getElementById('pontuacao-game-over');
    pontuacaoGameOver.textContent = i;

    const gameOverCard = document.getElementById('game-over-card');
    gameOverCard.style.display = 'block';

}   
document.addEventListener('DOMContentLoaded', () => {
  
    
 
    
     
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
   
    let loop;
    
    const jump = () => {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }

    pipe.classList.add('animation');
   
    
    document.addEventListener('keydown', jump);

    
    loop = setInterval(inicioJogo, 10);
    
});
document.getElementById('reiniciar').addEventListener('click', () => {
    const pipe = document.querySelector('.pipe');
    const mario = document.querySelector('.mario');
    const gameOverCard = document.getElementById('game-over-card');
    gameOverCard.style.display = 'none';

    mario.src = './imagens/mario.gif';

    i = 0;
    const score = document.getElementById('sco');
    score.innerHTML = i;

    // Reposicione os elementos do jogo para a posição inicial
    pipe.style.left = ''; // Remova a propriedade left
    mario.style.bottom = '0'; // Posicione o Mario na posição inicial
    mario.style.width = "150px";

    // Remova a propriedade de animação atual do estilo inline
    pipe.style.animation = '';

    // Adicione a classe 'animation-pipe' ao elemento 'pipe'
    pipe.classList.add('animation-pipe'); // Adicione a classe 'animation-pipe' com a nova animação
    mario.style.animation = '';
    inicioJogo();
    const jump = () => {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
    document.addEventListener('keydown', jump);  
    
});





    


