var finished = false;
var guesses = 0;
var target;
var random_index;
var guess_color;
var colors = ["Azure", "Brown", "Bisque", "Chocolate", "Salmon", "Pink"];

function do_game() {
    random_index = Math.floor(Math.random() * colors.length);


    while (!finished) {
        guess_color = prompt("I am thinking of one of these colors:\n" + colors.sort() + "\n" + "What color am I thinking of?");
        guesses++;
        finished = check_guess();
    }
}

function check_guess() {
    target = colors[random_index];
    if (colors.includes(guess_color)) {

        switch (true) {
            case guess_color < target:
                alert("The alphebet color is too low!");
                return false;
                break;
            case guess_color > target:
                alert("The alphebet color is too high!");
                return false;
                break;
            case guess_color == target:
                var myBody = document.getElementsByTagName("body")[0];
                myBody.style.background = target;
                alert("You got it with" + guesses + "times");
                return true;
                break;
            default:
                alert("Plese Enter!");
        }
    }else {
      alert("Sorry,I don't recognize your color.\nPlease try again.");
    }
}
