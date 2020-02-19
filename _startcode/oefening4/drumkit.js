// Js Play HTML audio element : https://www.w3schools.com/tags/av_met_play.asp
// audio.play()

const drums = document.querySelectorAll('.key');
const audio = document.querySelectorAll('audio');
const key = document.querySelectorAll('data-key')
console.log(audio);

drums.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        audio[index].currentTime = 0;
        audio[index].play();
    })
});

document.addEventListener('keydown', (event) => {
    const audiox = document.querySelector('audio');

    audio.forEach((element, index) => {
        if (event.keyCode == element.getAttribute('data-key')) {
            element.play();
            console.log(element.classList);

            keys[index].classList.add("playing")
        }
    })
})