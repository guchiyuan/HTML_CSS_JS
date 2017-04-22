function show_patterns() {
    var position_left = 25,
        position_top = 25;
    var width = 500,
        height = 500;
    var colors = ["Azure", "Brown", "Bisque", "Chocolate", "Salmon", "Pink", "yellow"];

    var this_body = document.getElementById("myBody");
    while (width > 50) {
        var this_div = document.createElement("div");
        var random_color = Math.random() * 7;
        random_color = Math.floor(random_color);
        this_div.style.background = colors[random_color];
        this_div.style.top = position_top + "px";
        this_div.style.left = position_left + "px";
        this_div.style.height = height + "px";
        this_div.style.width = width + "px";
        this_body.appendChild(this_div);
        position_left += 10;
        position_top += 10;
        width -= 20;
        height -= 20;


    }

}
