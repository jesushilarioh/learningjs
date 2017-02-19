(function() {
    // Create variables for the welcome message
    const greeting = 'Howdy ',
          name = 'Molly',
          message = ', please check your order:',
    // Concatenate the three variables above to create the welcome message
          welcome = greeting + name + message;

    // Create variables to hold details about the sign
    let sign = "Montague House",
        titles = sign.length,
        subTotal = titles * 5,
        shipping = 7,
        grandTotal = subTotal + shipping;

    // Get the element that has an id of greeting
    const el = document.getElementById("greeting");
    // Replace the content of that element with the personalized welcome message
    el.textContent = welcome;

    // Get the element that has an id of userSign then update its contents
    const elSign = document.getElementById("userSign");
    elSign.textContent = sign;

    // Get the element that has an id of titles then update its contents
    const elTitles = document.getElementById("titles");
    elTitles.textContent = titles;

    // Get the element that has an id of subTotal then update its contents
    const elSubTotal = document.getElementById("subTotal");
    elSubTotal.textContent = "$" + subTotal;

    // Get the element that has an id of shipping then update its contents
    const elShipping = document.getElementById("shipping");
    elShipping.textContent = "$" + shipping;

    // Get the element that has an id of grandTotal then update its contents
    const elGrandTotal = document.getElementById("grandTotal");
    elGrandTotal.textContent = "$" + grandTotal;

})();
