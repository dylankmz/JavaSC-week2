// Js Play HTML audio element : https://www.w3schools.com/tags/av_met_play.asp
// audio.play()

const drums = document.querySelectorAll('.key');
const audio = document.querySelectorAll('audio');
console.log(audio);


drums.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        audio[index].play();
    })
});

document.addEventListener('keydown'), (event) => {

}