var pTags = document.getElementsByTagName('p');
var h1Tags = document.getElementsByTagName('h1');
var firstPTag = pTags[0];
var classNameDone = document.getElementsByClassName('done');
var checklist = document.getElementById('checklist');
var harmony = document.querySelector(".harmony");
var pitch = document.querySelector('#pitch');
var h2Tags = document.querySelectorAll('h2');
var li = document.querySelector('.harmony');

log(pTags);
log(h1Tags);
log(checklist);
log(harmony);
log(pitch);
log(document);
log(firstPTag);
log(classNameDone);
log(h2Tags);
loopItems(pTags);
loopItems(h2Tags);

firstPTag.innerHTML = "New content within this <strong>Paragraph Tag</strong>.";

log(li);
log(li.className);
li.className = "";
log(li.className);
li.className = "harmony rhythm";
log(li.className);
li.className += " tempo";
log(li.className);
li.className = li.className.replace("tempo", "");
log(li.className);
log(li);

log(li.classList);
li.classList.add("new");
log(li.classList);
li.classList.remove("new");
log(li.classList);
log(li.parentElement);
log(li.parentElement.parentElement);
log(li.parentElement.children);
loopItems(li.parentElement.children);

// Console log Function
function log(data) {
    console.log(data);
}

// Loop function
function loopItems(data) {
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}
