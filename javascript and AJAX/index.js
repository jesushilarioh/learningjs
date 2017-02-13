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
                addToHTML(httpRequest.status);
                break;
            case 400:
                addToHTML(httpRequest.status);
                break;
            case 404:
                addToHTML(httpRequest.status);
                break;
            default:
                addToHTML(httpRequest.status);
            }
        }
    }

    function addToHTML(num) {
        const searchedWordHTMLElement = document.getElementById("word"),
            wordDefinitionHTMLElement = document.getElementById("definitions");
        if (num === 200) {
            if (typeof (JSON.parse(httpRequest.responseText)[0]) == 'undefined') {
                searchedWordHTMLElement.className = "";
                searchedWordHTMLElement.innerHTML = "I'm sorry, " + "<strong id='wrongWord'>" + ajaxTextbox.value + "</strong>" + " is not a word...";
                wordDefinitionHTMLElement.innerHTML = "Sorry, no suggestions...try again.";
            } else {
                searchedWordHTMLElement.className = "green";
                searchedWordHTMLElement.innerHTML = JSON.parse(httpRequest.responseText)[0].word;
                wordDefinitionHTMLElement.innerHTML = JSON.parse(httpRequest.responseText)[0].text;
            }
        } else if (num === 400) {
            innerBlankHTML(searchedWordHTMLElement);
            innerBlankHTML(wordDefinitionHTMLElement);
        } else if (num === 404) {
            innerBlankHTML(searchedWordHTMLElement);
            innerBlankHTML(wordDefinitionHTMLElement);
        } else {
            wordDefinitionHTMLElement.innerHTML = "We're sorry, your request could not be processed at this time.";
        }
    }

    function innerBlankHTML(usersWord) {
        usersWord.innerHTML = "";
    }

})();
