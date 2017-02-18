(function() {
    // Below are two ways to create an array
    // array literal:
    let colors;
    colors = ['white',
        'black',
        'custom'
    ];

    let el = document.getElementById("colors");
    el.textContent = colors[0];


    // array constructor
    let colors2 = new Array('grand red',
        'green seven',
        'seven orange');

    var el2 = document.getElementById("colors2");
    el2.textContent = colors2[0];
})();
