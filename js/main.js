const record = document.querySelector('.record');
const toggleButton = document.getElementById('toggle-spin');

const spinAnimation = TweenMax.to('#img', 10, {
    rotation: 360,
    ease: Linear.easeNone,
    repeat: -1
});

let isPlaying = true;

function setDiskState(play) {
    record.style.animationPlayState = play ? 'running' : 'paused';
    if (play) {
        spinAnimation.resume();
    } else {
        spinAnimation.pause();
    }
}

toggleButton.addEventListener('click', () => {
    isPlaying = !isPlaying;
    setDiskState(isPlaying);
    toggleButton.textContent = isPlaying ? 'Pausar' : 'Iniciar';
});

setDiskState(true);