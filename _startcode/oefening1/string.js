const str = document.querySelector('#title').innerText
    .replace("funk", "junk");
console.log(str);

document.querySelector('#title').innerText = str;