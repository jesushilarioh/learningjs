(function() {
    var httpRequest;
    var ajaxButton = document.getElementById("ajaxButton");
    var ajaxTextbox = document.getElementById("ajaxTextbox");

        ajaxButton.addEventListener("click", getValueFromUser);
        ajaxTextbox.addEventListener("keyup", getValueFromUser);

    function getValueFromUser() {
      var word = ajaxTextbox.value;
      makeRequest('http://api.wordnik.com:80/v4/word.json/'+ word + '/definitions?limit=2&includeRelated=false&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5');
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
                      document.getElementById("word").className = "";
                      document.getElementById("word").innerHTML = "I'm sorry, " + "<strong id='wrongWord'>" + ajaxTextbox.value + "</strong>" + " is not a word...";
                      document.getElementById("definitions").innerHTML = "Sorry, no suggestions...try again.";
                    console.log("Sorry. No suggestions!");
                  } else {
                      document.getElementById("word").className = "green";
                      document.getElementById("word").innerHTML = JSON.parse(httpRequest.responseText)[0].word;
                      document.getElementById("definitions").innerHTML = JSON.parse(httpRequest.responseText)[0].text;
                      console.log(JSON.parse(httpRequest.responseText)[0].word + ": " + JSON.parse(httpRequest.responseText)[0].text);
                  }
                  break;
              case 400:
                  document.getElementById("word").innerHTML = "";
                  document.getElementById("definitions").innerHTML = "";
                  console.log("400 ERROR: We're sorry, your request could not be processed at this time.");
                  break;
              case 404:
                  document.getElementById("word").innerHTML = "";
                  document.getElementById("definitions").innerHTML = "";
                  console.log("404 ERROR: We're sorry, your request could not be processed at this time.");
                  break;
              default:
                  document.getElementById("definitions").innerHTML = "We're sorry, your request could not be processed at this time.";
                  console.log("We're sorry, your request could not be processed at this time.");
            }
        }
    }

})();
