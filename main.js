'use strict';

const cdOutput = document.getElementById('countdown');
const btnStop = document.querySelector('.btn');


let c = 10;

const myCountdown = setInterval(countdown, 1000);

btnStop.addEventListener('click', function () {
    c = -1;
});

function countdown() {
    if (c >= 0) {
        cdOutput.innerText = c--;
    }
    if (c < 0) {
        cdOutput.innerText = 'Buon Anno!';
    }
}