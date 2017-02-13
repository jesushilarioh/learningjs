(function () {
    "use strict";
    var httpRequest;
    const ajaxButton = document.getElementById("ajaxButton"),
        ajaxTextbox = document.getElementById("ajaxTextbox");

    ajaxButton.addEventListener("click", getValueFromUser);
    ajaxTextbox.addEventListener("keyup", getValueFromUser);

    function getValueFromUser() {
        let word = ajaxTextbox.value;
        makeRequest('http://api.wordnik.com:80/v4/word.json/' + word + '/definitions?limit=1&includeRelated=false&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5');
    }

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

    function innerBlankHTML(usersWord, bool) {
        if (bool === true) {
            usersWord.innerHTML = "";
        } else {
            usersWord.className = "";
        }
    }

    function request200() {
        const searchedWordHTMLElement = document.getElementById("word"),
            wordDefinitionHTMLElement = document.getElementById("definitions"),
            JSONParse = JSON.parse(httpRequest.responseText);

        if (typeof (JSONParse[0]) == 'undefined') {
            innerBlankHTML(searchedWordHTMLElement, false);
            searchedWordHTMLElement.innerHTML = "I'm sorry, " + "<strong id='wrongWord'>" + ajaxTextbox.value + "</strong>" + " is not a word...";
            wordDefinitionHTMLElement.innerHTML = "Sorry, no suggestions...try again.";
        } else {
            searchedWordHTMLElement.className = "green";
            for (var i = 0; i < JSONParse.length; i++) {
                searchedWordHTMLElement.innerHTML = JSONParse[i].word;
                wordDefinitionHTMLElement.innerHTML = JSONParse[i].text;
            }
        }
    }

    function request400() {
        const searchedWordHTMLElement = document.getElementById("word"),
            wordDefinitionHTMLElement = document.getElementById("definitions");

        innerBlankHTML(searchedWordHTMLElement, true);
        innerBlankHTML(wordDefinitionHTMLElement, true);

    }

    function request404() {
        const searchedWordHTMLElement = document.getElementById("word"),
            wordDefinitionHTMLElement = document.getElementById("definitions");

        innerBlankHTML(searchedWordHTMLElement, true);
        innerBlankHTML(wordDefinitionHTMLElement, true);
    }

    function requestOther() {
        const wordDefinitionHTMLElement = document.getElementById("definitions");
        wordDefinitionHTMLElement.innerHTML = "We're sorry, your request could not be processed at this time.";
    }
})();
