(function () {
    //"use strict";

    // Global variables
    var httpRequest;

    // Add event listeners to ajaxButton and ajaxTextbox
    document.getElementById("ajaxButton").addEventListener("click", usersValue);
    document.getElementById("ajaxTextbox").addEventListener("keyup", usersValue);

    // Recieve value from the user
    function usersValue() {
        let word = document.getElementById("ajaxTextbox").value;
        makeRequest('http://api.wordnik.com:80/v4/word.json/' + word + '/definitions?limit=1&includeRelated=false&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5');
    }

    // Request the URL api
    function makeRequest(url) {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            alert('Giving up :[ Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = requestStatus;
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    // Methods to take when receiving a response
    function requestStatus() {
        const searchedWord = document.getElementById("word"),
            wordDefinition = document.getElementById("definitions");

        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            switch (httpRequest.status) {
            case 200:
                const JSONParse = JSON.parse(httpRequest.responseText);

                if (typeof (JSONParse[0]) === 'undefined') {
                    emptyString(searchedWord, false);
                    searchedWord.innerHTML = "I'm sorry, " + "<strong id='wrongWord'>" + document.getElementById("ajaxTextbox").value + "</strong>" + " is not a word...";
                    wordDefinition.innerHTML = "Sorry, no suggestions...try again.";
                } else {
                    searchedWord.className = "green";
                    searchedWord.innerHTML = JSONParse[0].word;
                    wordDefinition.innerHTML = JSONParse[0].text;
                }
                break;
            case 400:
                emptyString(searchedWord, true);
                emptyString(wordDefinition, true);
                break;
            case 404:
                emptyString(searchedWord, true);
                emptyString(wordDefinition, true);
                break;
            default:
                wordDefinition.innerHTML = "We're sorry, your request could not be processed at this time.";
            }
        }
    }

    // Inner api data to index.html
    function emptyString(usersWord, bool) {
        if (bool === true) {
            usersWord.innerHTML = "";
        } else {
            usersWord.className = "";
        }
    }
})();
