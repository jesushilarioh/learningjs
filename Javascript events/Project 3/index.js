(function() {
    const userInput = document.getElementById("userInput"),
          mainLink = document.getElementById("mainLink");

    mainLink.addEventListener('click', function() {

        console.log(mainLink.textContent);
        userInput.value = mainLink.textContent;
    })
})();
