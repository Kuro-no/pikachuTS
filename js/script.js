const pikachu = document.querySelector('.pikachu');
const pokeball = document.querySelector('.pokeball');
const audio = document.querySelector('audio');

const jump = () => {''
    pikachu.classList.add('jump');
    audio.play();
    
    setTimeout(() => {
        pikachu.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pokeballPostition = pokeball.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px','');

    if (pokeballPostition <= 120 && pokeballPostition > 0 && pikachuPosition <60) {

        pokeball.style.animation = 'none';
        pokeball.style.left = `${pokeballPostition}px`;

        pikachu.style.animation = 'none';
        pikachu.style.left = `${pikachuPosition}px`;

        pikachu.src = './imagens/raichu2.png';
        pikachu.style.width = '200px';

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);
