(function () {
    'use strict';

    let promise = fetch('https://api.github.com/users/jesushilarioh');
    // work with success method of a promise
    promise.then(response => {
        console.log(response);
        return response.json();
    }).then(json => {
        console.log(json);
    }).catch(reason => {
        console.log("Catch: ", reason);
    });

})();
