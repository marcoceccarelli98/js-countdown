'use strict';

const cdOutput = document.getElementById('countdown');

let c = 10;

const myCountdown = setInterval(countdown, 1000);

function countdown() {
    if (c >= 0) {
        cdOutput.innerText = c--;
    }
    if (c < 0) {
        cdOutput.innerText = 'Buon Anno!';
    }
}