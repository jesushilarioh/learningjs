(function() {
    const userInput = document.getElementById("userInput"),
          mainLink = document.getElementById("mainLink"),
          section = document.getElementById("section");
    let listOfWords = ['brand', 'grand', 'staple', 'topple', 'johnny', 'utah'];


    // Create a series of links
    for (i = 0; i < listOfWords.length; i++) {
        let newLink = document.createElement("A");
        let text = document.createTextNode(listOfWords[i]);
        section.appendChild(document.createElement("BR"));
        section.appendChild(newLink);
        newLink.setAttribute('href', '#');
        newLink.setAttribute('value', listOfWords[i]);
        newLink.appendChild(text);

    }


    mainLink.addEventListener('click', function() {
        console.log(mainLink.textContent);
        userInput.value = mainLink.textContent;
    })
})();
