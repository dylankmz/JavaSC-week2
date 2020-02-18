const colors = ['red', 'blue', 'yellow', 'green', 'magenta', 'cyan'];
let block = document.querySelectorAll('.js-block');

document.body.addEventListener("mouseover", function (event) {
    console.log(event.target.classList);

    if (event.target.classList.contains("js-block")) {
        let random = Math.floor(Math.random() * colors.length);
        event.target.style.backgroundColor = colors[random];
        console.log(random);

    }

});