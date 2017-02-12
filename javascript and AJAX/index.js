(function() {
    var httpRequest;
    var ajaxButton = document.getElementById("ajaxButton");
    var ajaxTextbox = document.getElementById("ajaxTextbox");


    ajaxButton.onclick = function() {
        var word = document.getElementById("ajaxTextbox").value;
        makeRequest('http://api.wordnik.com:80/v4/word.json/'+ word + '/definitions?limit=2&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5');
    };
    ajaxTextbox.onkeyup = function() {
        var word = document.getElementById("ajaxTextbox").value;
        makeRequest('http://api.wordnik.com:80/v4/word.json/'+ word + '/definitions?limit=2&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5');
    };

    function makeRequest(url) {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            alert('Giving up :[ Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('Get', url);
        httpRequest.send();
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                if (typeof(JSON.parse(httpRequest.responseText)[0]) == 'undefined') {
                    console.log("Sorry.");
                } else {
                    console.log(JSON.parse(httpRequest.responseText)[0].word + ": " + JSON.parse(httpRequest.responseText)[0].text)
                }
            } else if (httpRequest.status === 404){
                console.log("404 There was a problem with the request.");
            } else {
                console.log("All others!");
            }
        }
    }
})();
