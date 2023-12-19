function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}


function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        let userInput = prompt("Введите число", "");
        if (isNumeric(userInput)) {
            this.value += +userInput;
        } else {
            alert('Вы ввели не число')
        }
    };
}

accumulator = new Accumulator(1);

function increaseCounter() {
    accumulator.read();
    document.getElementById("counter").innerHTML = accumulator.value;
}

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 4) + "…";
    } else {
        return str;
    }
}

let cards = document.getElementsByClassName('card__description');
for (let i = 0; i < cards.length; ++i) {
    let card = cards[i];
    card.innerHTML = truncate(card.innerHTML, 320);
}
