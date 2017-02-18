var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");
console.log(items);

// add an event listener to each item in the
// items array and the inputs array.
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", editItem);
  inputs[i].addEventListener("blur", updateItem);
  inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() {
  this.className = 'edit';
  var input = this.querySelector('input');
  input.focus();
  console.log("The length of " + input.value + " is", input.value.length);
  input.setSelectionRange(0, input.value.length);
}

function updateItem() {
  console.log("We've just blurred", this.value);
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}

function itemKeypress(event) {
  if (event.which === 13) {
    updateItem.call(this);
  }
  console.log(event.which);
}
