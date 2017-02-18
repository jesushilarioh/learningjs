var numOne = document.getElementById('num-one');
var numTwo = document.getElementById('num-two');
var addSum = document.getElementById('add-sum');

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    var sum = one + two;
    addSum.innerHTML = "Your sum is: " + sum;
}

var orange = document.getElementById("orange");
var black = document.getElementById("black");
var red = document.getElementById("red");


orange.addEventListener("click", picLink);
black.addEventListener("click", picLink);
red.addEventListener("click", picLink);

function picLink() {
    var allImages = document.querySelectorAll("img");

    for ( var i = 0; i < allImages.length; i++) {
        allImages[i].className = "hide";
    }

    var picId = this.attributes["data-grand"].value;
    var pic = document.getElementById(picId);
    if (pic.className === "hide") {
        pic.className = "";
    } else {
        pic.className = "hide";
    }
}
