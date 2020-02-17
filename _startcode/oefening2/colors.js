const colors = ['red', 'blue', 'yellow', 'green', 'magenta', 'cyan'];
let block = document.querySelectorAll('.js-block');

document.body.addEventListener("click", function (event) {
    console.log(event.target.classList);

    if (event.target.classList.contains("js-block")) {
        event.target.style.backgroundColor = "red";
    }

});