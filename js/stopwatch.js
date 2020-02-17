import {
    clock
} from "./main.js";

let time;
let difference;
let currentDifference = 0;

const htmlElements = {
    startBtn: document.querySelector('.container .buttons button.start'),
    stopBtn: document.querySelector('.container .buttons button.stop'),
    resetBtn: document.querySelector('.container .buttons button.reset'),
    output: document.querySelector('.container .output'),
};

function Stopwatch() {

}

Stopwatch.prototype.init = function () {
    htmlElements.startBtn.addEventListener('click', startTimer);
    htmlElements.resetBtn.addEventListener('click', resetTimer);
    htmlElements.stopBtn.addEventListener('click', stopTimer);
}


Stopwatch.prototype.showTimer = function () {
    clearInterval(clock.timerId);
    htmlElements.output.innerText = '00:00:00.0';
}

function startTimer() {
    let start = Date.now();
    htmlElements.startBtn.removeEventListener('click', startTimer);
    htmlElements.resetBtn.removeEventListener('click', resetTimer);
    htmlElements.stopBtn.addEventListener('click', stopTimer);
    time = setInterval(letStart, 100, start);
}

function letStart(start) {
    let end = Date.now();
    difference = end - start + currentDifference;
    let miliseconds = parseInt((difference % 1000) / 100);
    let seconds = parseInt((difference / 1000) % 60);
    if (seconds < 10) {
        seconds = '0' + seconds
    };
    let minutes = parseInt(((difference / 1000) / 60) % 60);
    if (minutes < 10) {
        minutes = '0' + minutes
    };
    let hours = parseInt(((difference / 1000) / 3600) % 60);
    if (hours < 10) {
        hours = '0' + hours
    };
    htmlElements.output.innerText = `${hours}:${minutes}:${seconds}.${miliseconds}`;
}

function stopTimer() {
    clearInterval(time);
    htmlElements.startBtn.addEventListener('click', startTimer);
    htmlElements.resetBtn.addEventListener('click', resetTimer);
    currentDifference = difference;
}

function resetTimer() {
    htmlElements.stopBtn.removeEventListener('click', stopTimer);
    currentDifference = 0;
    showTimer();
}

export {
    Stopwatch
}