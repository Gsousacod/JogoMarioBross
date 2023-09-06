document.addEventListener('DOMContentLoaded', () => {
    let i = 0;

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
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
        const pipePosition = pipe.offsetLeft;

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

            pipe.style.animation = 'nome'; // Replace 'nome' with your animation name
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = '${marioPosition}px';

            mario.src = './imagens/game-over.png';
            mario.style.width = '75px'
            mario.style.marginLeft = "50px"

            clearInterval(loop);
            i = 0;
            const score = document.getElementById('sco');
            score.innerHTML = i;
        }else if (pipePosition < -20) {
            // Pipe passed the Mario
            i++; // Increment the score
            const score = document.getElementById('sco');
            score.innerHTML = i;
        }


    }, 10);
});