(function() {
    // Creating An Array
    // Array Literal:
    let colors;
    colors = ['white',
              'black',
              'custom'
    ];

    let el = document.getElementById("colors");
    el.textContent = colors[0];


    // Array Constructor:
    let colors2 = new Array('grand red',
                            'green seven',
                            'seven orange');

    var el2 = document.getElementById("colors2");
    el2.textContent = colors2[0];


    // Accessing & Changing Values In An Array
    // Update the third item in the colors array
    colors[2] = 'baige';

    // Replace el with third item from the array
    el.textContent = colors[2];
})();
