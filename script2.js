let counter = 0;

function increase() {
    counter = counter + 5;
    document.getElementById("counter").innerHTML = counter;
}

function decrease() {
    counter = counter - 5;
    document.getElementById("counter").innerHTML = counter;
}

function reset() {
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
}