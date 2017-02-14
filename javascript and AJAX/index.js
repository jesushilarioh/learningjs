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
        makeRequest("http://api.wordnik.com:80/v4/word.json/" + word + "/definitions?limit=200&includeRelated=true&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5");
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
            partOfSpeech = document.getElementById("partOfSpeech"),
            wordDefinition = document.getElementById("definitions"),
            source = document.getElementById("source");

        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            switch (httpRequest.status) {
            case 200:
                const JSONParse = JSON.parse(httpRequest.responseText);

                if (typeof (JSONParse[0]) === 'undefined') {
                    emptyString(searchedWord, false);
                    searchedWord.innerHTML = "<strong id='wrongWord'>" + document.getElementById("ajaxTextbox").value;
                    partOfSpeech.innerHTML = "Oops...";
                    wordDefinition.innerHTML = "Sorry, no suggestions";
                    source.innerHTML = "...Try Again";
                } else {
                    searchedWord.className = "green";
                    searchedWord.innerHTML = JSONParse[0].word;
                    partOfSpeech.innerHTML = JSONParse[0].partOfSpeech;
                    wordDefinition.innerHTML = JSONParse[0].text;
                    source.innerHTML = JSONParse[0].attributionText;
                }
                break;
            case 400:
                emptyString(searchedWord, true);
                emptyString(partOfSpeech, true);
                emptyString(wordDefinition, true);
                emptyString(source, true);
                break;
            case 404:
                emptyString(searchedWord, true);
                emptyString(partOfSpeech, true);
                emptyString(wordDefinition, true);
                emptyString(source, true);
                break;
            default:
                wordDefinition.innerHTML = "We're sorry, your request could not be processed at this time. Technical difficulties have occured on our end... please check back soon!";
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
