(function() {
    //"use strict";

    // Global variables
    var httpRequest;
    var httpRequest2;

    // Add event listeners to ajaxButton and ajaxTextbox
    document.getElementById("ajaxButton").addEventListener("click", usersValue);
    document.getElementById("ajaxTextbox").addEventListener("keyup", usersValue);

    // Recieve value from the user
    function usersValue() {
        let word = document.getElementById("ajaxTextbox").value;
        makeRequest("http://api.wordnik.com:80/v4/word.json/" + word + "/definitions?limit=200&includeRelated=true&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=551cd772a6bd0f92b40010e295e0739d0acaf17d08ecc3c9d");
        makeRequest2("http://api.wordnik.com:80/v4/word.json/" + word + "/relatedWords?limit=200&includeRelated…ncludeTags=false&api_key=551cd772a6bd0f92b40010e295e0739d0acaf17d08ecc3c9d");
    }

//"http://api.wordnik.com/v4/word.json/" + word + "/relatedWords?limit=200&includeRelated…ncludeTags=false&api_key=551cd772a6bd0f92b40010e295e0739d0acaf17d08ecc3c9d"


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

    function makeRequest2(url) {
        httpRequest2 = new XMLHttpRequest();

        if (!httpRequest2) {
            alert('Giving up :[ Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest2.onreadystatechange = requestStatus2;
        httpRequest2.open('GET', url);
        httpRequest2.send();
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

                    if (typeof(JSONParse[0]) === 'undefined') {
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
                    emptyAll();
                    break;
                case 404:
                    emptyAll();
                    break;
                case 503:
                    emptyAll();
                    wordDefinition.innerHTML = "We're sorry, your request could not be processed at this time. Technical difficulties have occured on our end... please check back soon!";
                    break;
                default:
                    emptyAll();
                    wordDefinition.innerHTML = "We're sorry, your request could not be processed at this time. Technical difficulties have occured on our end... please check back soon!";

            }

        }

        function emptyAll() {
            emptyString(searchedWord, true);
            emptyString(partOfSpeech, true);
            emptyString(wordDefinition, true);
            emptyString(source, true);
        }
    }

    function requestStatus2() {
        const searchedWord = document.getElementById("word"),
            partOfSpeech = document.getElementById("partOfSpeech"),
            wordDefinition = document.getElementById("definitions"),
            source = document.getElementById("source"),
            relatedWords = document.getElementById("relatedWords");

        if (httpRequest2.readyState === XMLHttpRequest.DONE) {
            switch (httpRequest2.status) {
                case 200:
                    const JSONParse2 = JSON.parse(httpRequest2.responseText);

                    if (typeof(JSONParse2[2]) === 'undefined') {

                    } else {
                        let HTMLstring = "";
                        for (i = 0; i < JSONParse2[2].words.length; i++) {
                            console.log(JSONParse2[2].words[i]);
                            HTMLstring += JSONParse2[2].words[i] + ",  ";
                        }
                        relatedWords.innerHTML = HTMLstring;
                    }

                    break;
                case 400:

                    break;
                case 404:

                    break;
                case 503:

                    break;
                default:

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
