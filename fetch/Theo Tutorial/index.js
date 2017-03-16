var request = new Request('https://api.github.com/users/jesushilarioh');

console.log(request);
console.log(request.method);

fetch(request).then(function(response) {
    return response.json().then(function(json) {
        console.log(json.name);
    });
});
