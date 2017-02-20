(function() {
    // Constant Variables
    const userInput = document.getElementById("userInput"),
          mainLink = document.getElementById("mainLink"),
          section = document.getElementById("section");

    // Variables
    var listOfWords = ['brand', 'grand', 'staple', 'topple', 'johnny', 'utah'];

    // Create a link for each word in listOfWords array
    for (i = 0; i < listOfWords.length; i++) {
        let newLink = document.createElement("A");
        let text = document.createTextNode(listOfWords[i]);
        section.appendChild(newLink);
        newLink.setAttribute('href', '#');
        newLink.setAttribute('value', listOfWords[i]);
        newLink.appendChild(text);
    }

    // Assign all links to links variables
    var links = section.querySelectorAll("a");

    // Add an event listenr to each link
    for (var i = 0; i < listOfWords.length; i++) {
        links[i].addEventListener("click", function() {

            // When click the value will be replaced in input box
            userInput.value = this.textContent;
        });
    }

})();
