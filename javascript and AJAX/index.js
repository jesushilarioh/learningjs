(function() {
    var httpRequest;

    document.getElementById("ajaxButton").addEventListener("click", getValueFromUser);
    document.getElementById("ajaxTextbox").addEventListener("keyup", getValueFromUser);

    function getValueFromUser() {
      var word = document.getElementById("ajaxTextbox").value;
      makeRequest('http://api.wordnik.com:80/v4/word.json/'+ word + '/definitions?limit=2&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5');
    }

    function makeRequest(url) {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            alert('Giving up :[ Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = addToHTML;
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    function addToHTML() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            switch (httpRequest.status) {
              case 200:
                  if (typeof(JSON.parse(httpRequest.responseText)[0]) == 'undefined') {
                    console.log("Sorry. No suggestions!");
                  } else {
                    console.log(JSON.parse(httpRequest.responseText)[0].word + ": " + JSON.parse(httpRequest.responseText)[0].text)
                  }
                  break;
              case 400:
                  console.log("400 ERROR: We're sorry, your request could not be processed at this time.");
                  break;
              case 404:
                  console.log("404 ERROR: We're sorry, your request could not be processed at this time.");
                  break;
              default:
                  console.log("We're sorry, your request could not be processed at this time.");
            }
        }
    }

})();
