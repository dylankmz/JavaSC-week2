// DATE FORMATS : https://www.w3schools.com/js/js_date_formats.asp
// SORTING ARRAY : https://www.w3schools.com/js/js_array_sort.asp


const s = document.querySelectorAll('#dateList li');

let jsDate = [];
s.forEach(element => {
    console.log(element.innerHTML)
    jsDate.push(element.innerHTML)

});

jsDate.sort(function (a, b) {
    console.log(b);
    console.log(new Date(b));

    return new Date(b) - new Date(a);

});

jsDate.reverse();
console.log(jsDate);

s.array.forEach(element, index => {
    console.log(element.innerHTML, index);
    element.innerHTML = jsDate[index];


});



jsDate.sort();
console.log(jsDate)