(function() {
    'use strict';

    var myHeaders = new Headers();
    myHeaders.append('Api-User-Agent', 'Example/1.0')
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'no-cors',
        cache: 'default'
    };

    fetch('https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=grand', myInit)
        // work with success method of a promise
        .then(response => {
            console.log(response);
            return response.text()
        }).then(data => {
            document.body.textContent = data;
        }).catch(reason => {
            console.log("Catch: ", reason);
        });

})();
