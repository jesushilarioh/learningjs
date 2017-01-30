var pTags = document.getElementsByTagName('p');
var h1Tags = document.getElementsByTagName('h1');
var firstPTags = pTags[0];
var classNameDone = document.getElementsByClassName('done');
var checklist = document.getElementById('checklist');
var harmony = document.querySelector(".harmony");
var pitch = document.querySelector('#pitch');
var h2Tags = document.querySelectorAll('h2');

log(pTags);
log(h1Tags);
log(checklist);
log(harmony);
log(pitch);
log(document);
log(firstPTags);
log(classNameDone);
log(h2Tags);
loopItems(pTags);
loopItems(h2Tags);

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
