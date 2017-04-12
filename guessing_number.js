var target = parseInt(prompt("I am thinking of a number.\nPlease enter a number between 1 to 100."));
var guess = parseInt(prompt("Please guess the number."));
var finished = false;
var times = 1;
var min = 0,
    max = 100;
if (guess < 0 || guess > 100) {
    alert("Wrong Range");
} else {
    while (!finished) {
        if (guess < target) {
            min = guess;
            guess = parseInt(prompt("guess is too small\nIt betweens" + guess + " and " + max));
        } else if (guess > target) {
            max = guess;
            guess = parseInt(prompt("guess is too large\nIt betweens" + min + " and " + guess));
        } else {
            alert("You get the number with " + times + " times");
            finished = true;
        }
        times++;
    }
}
