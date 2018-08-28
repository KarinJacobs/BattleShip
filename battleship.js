function play() {

    explainer();

    var data = {
        boats: getRandomNumber(0, 8),
        misses: 0,
        score: 0,
        number: 0,
        previousNumbers: [],
        hit: 0,
    };

    while (data.misses < 3 && data.score < 3) {
        getInput();
        playGame();
    }

    if (data.score == 3) {
        alert("Game over! You Won.\nMisses: " + data.misses + "\nScores: " + data.score);
    } else {
        alert("Game over! You Lost.\nMisses: " + data.misses + "\nScores: " + data.score);
    }

    function explainer() {
        alert("Explanation Sea Battle:\nGiven three boats hiding in the water on places 0 to 7. Each boat is in a seperate number. Guess where the boats are by entering a number ranging from 0 - 7. If you find all the boats, before you miss three times, you win the game!");
    }

    function getRandomNumber(min, max) {
        let n = [];
        let t;
        while (n.length < 3) {
            t = Math.floor(Math.random() * max) + min;
            if (t != n[0] && t != n[1]) {
                n.push(t);
            }
        }
        return n;
    }

    function getInput() {
        data.number = parseInt(prompt("Pick a number (0 - 7) to sink the boat"));
        if (isNaN(data.number) == true || data.number > 7) {
            alert("Please enter a number between 0 and 7");
            getInput();
        }
        if (data.previousNumbers.indexOf(data.number) != -1) {
            alert("You already checked the water here");
            getInput();
        }
    }

    function playGame() {
        data.previousNumbers.push(data.number);
        if (data.boats.indexOf(data.number) != -1) {
            alert("You sunk one boat. Well done!");
            data.score++;
        } else {
            data.misses++;
            alert("Miss!");
        }
    }

}