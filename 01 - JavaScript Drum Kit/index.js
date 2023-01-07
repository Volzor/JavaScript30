
window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`); //selects the first audio element along with the element data-key that was fired fom the keydown event
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
})
