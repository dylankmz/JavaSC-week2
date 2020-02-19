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
    console.log(audiox.getAttribute('data-key'));
    console.log(event.keyCode);

    audio.forEach((element, index) => {

        if (event.keyCode == element.getAttribute('data-key')) {
            element.play();
        }
    })
})