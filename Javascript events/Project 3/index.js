(function() {
    var userInput = document.getElementById("userInput"),
          mainLink = document.getElementById("mainLink"),
          section = document.getElementById("section");
    let listOfWords = ['brand', 'grand', 'staple', 'topple', 'johnny', 'utah'];

    let link = [];

    // Create a series of links
    for (i = 0; i < listOfWords.length; i++) {
        let newLink = document.createElement("A");
        let text = document.createTextNode(listOfWords[i]);
        section.appendChild(newLink);
        newLink.setAttribute('href', '#');
        newLink.setAttribute('value', listOfWords[i]);
        newLink.appendChild(text);

    }

    let links = section.querySelectorAll("a");
    console.log(links);
    console.log(links[3].text);


        links[1].addEventListener("click", function() {
            console.log("hello");
            userInput.value = links[1].text;
            console.log(userInput.value);
        });


        // userInput.value = links[i].textContent;

    /*mainLink.addEventListener('click', function() {
        console.log(mainLink.textContent);
        userInput.value = mainLink.textContent;
    })*/
})();
