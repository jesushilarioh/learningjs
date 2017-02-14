(function () {
    //"use strict";

    // Global Constants
    const ajaxButton = document.getElementById("ajaxButton"),
          ajaxTextbox = document.getElementById("ajaxTextbox"),
          searchedWordHTMLElement = document.getElementById("word"),
          wordDefinitionHTMLElement = document.getElementById("definitions");

    // Global variables
    var httpRequest;

    // Add event listeners to ajaxButton and ajaxTextbox
    ajaxButton.addEventListener("click", getValueFromUser);
    ajaxTextbox.addEventListener("keyup", getValueFromUser);

    // Recieve value from the user
    function getValueFromUser() {
        let word = ajaxTextbox.value;
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
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            switch (httpRequest.status) {
            case 200:
                request200();
                break;
            case 400:
                request400();
                break;
            case 404:
                request404();
                break;
            default:
                requestOther();
            }
        }
    }

    // Inner api data to index.html
    function innerBlankHTML(usersWord, bool) {
        if (bool === true) {
            usersWord.innerHTML = "";
        } else {
            usersWord.className = "";
        }
    }

    // Function to use if request status is 200
    function request200() {
        const JSONParse = JSON.parse(httpRequest.responseText);

        if (typeof (JSONParse[0]) === 'undefined') {
            innerBlankHTML(searchedWordHTMLElement, false);
            searchedWordHTMLElement.innerHTML = "I'm sorry, " + "<strong id='wrongWord'>" + ajaxTextbox.value + "</strong>" + " is not a word...";
            wordDefinitionHTMLElement.innerHTML = "Sorry, no suggestions...try again.";
        } else {
            searchedWordHTMLElement.className = "green";
            searchedWordHTMLElement.innerHTML = JSONParse[0].word;
            wordDefinitionHTMLElement.innerHTML = JSONParse[0].text;
        }
    }

    // Function to use if request status is 400
    function request400() {
        innerBlankHTML(searchedWordHTMLElement, true);
        innerBlankHTML(wordDefinitionHTMLElement, true);

    }

    // Function to use if request status is 404
    function request404() {
        innerBlankHTML(searchedWordHTMLElement, true);
        innerBlankHTML(wordDefinitionHTMLElement, true);
    }

    // Function to use if request status anothor number
    function requestOther() {
        wordDefinitionHTMLElement.innerHTML = "We're sorry, your request could not be processed at this time.";
    }
})();
