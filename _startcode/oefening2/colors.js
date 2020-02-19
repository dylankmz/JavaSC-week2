const colors = ['red', 'blue', 'yellow', 'green', 'magenta', 'cyan'];
let kleur = document.querySelectorAll(".js-block");
// console.log(kleur);
​​
let parent = document.querySelector("#colors");
// console.log(parent);
​
//event is object dat gecreerd wordt wanneer er op iets geklikt wordt
parent.addEventListener("mouseover", function (event) {
    console.log(event.target);
    // console.log(event.currentTarget);
    ​
    let random = Math.floor(Math.random() * colors.length)
    event.target.style.backgroundColor = colors[random]​
    if (event.target.className == "js-block") {
        // console.log(colors);
    }​
});​​​
// let kleur = document.querySelectorAll(".js-block");
// kleur.forEach(element => {
//     // debugger;
//     // console.log(element);
//     element.addEventListener("mouseover", function (event) {
//         console.log(event.currentTarget);
//         let random = Math.floor(Math.random() * colors.length);
//         event.target.style.backgroundColor = colors[random]
//     })
// });