var input = document.getElementById("price-type");


function price_display() {

    var month_price_list = document.getElementsByClassName("month-price");
    var annual_price_list = document.getElementsByClassName("annual-price");

    var month_display = "";
    var annual_display = "";

    if (input.checked) {
        var month_display = "inline";
        var annual_display = "none";
    } else {
        var month_display = "none";
        var annual_display = "inline";
    }

    for (var loopIndex = 0; loopIndex < month_price_list.length; loopIndex++) {
        month_price_list[loopIndex].style.display = month_display;
        annual_price_list[loopIndex].style.display = annual_display;
    }


    return;
}


input.onchange = function() {
    price_display();
}

price_display();