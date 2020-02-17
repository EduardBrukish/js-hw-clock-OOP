import {
    clock
} from "./main.js";

const htmlElements = {
    startBtn: document.querySelector('.container .buttons button.start'),
    stopBtn: document.querySelector('.container .buttons button.stop'),
    resetBtn: document.querySelector('.container .buttons button.reset'),
    output: document.querySelector('.container .output'),
};

function Stopwatch() {
    this.difference = 0;
    this.currentDifference = 0;
}

Stopwatch.prototype.init = function () {
    htmlElements.startBtn.addEventListener('click', this.startTimer.bind(this), {
        once: true
    });
    htmlElements.resetBtn.addEventListener('click', this.resetTimer.bind(this));
}

Stopwatch.prototype.showTimer = function () {
    clearInterval(clock.timerId);
    htmlElements.output.innerText = '00:00:00.0';
}

Stopwatch.prototype.startTimer = function () {
    let start = Date.now();
    htmlElements.stopBtn.addEventListener('click', this.stopTimer.bind(this), {
        once: true
    });
    this.time = setInterval(this.letStart.bind(this), 100, start);
}

Stopwatch.prototype.letStart = function (start) {
    let end = Date.now();
    this.difference = end - start + this.currentDifference;
    let miliseconds = parseInt((this.difference % 1000) / 100);
    let seconds = parseInt((this.difference / 1000) % 60);
    if (seconds < 10) {
        seconds = '0' + seconds
    };
    let minutes = parseInt(((this.difference / 1000) / 60) % 60);
    if (minutes < 10) {
        minutes = '0' + minutes
    };
    let hours = parseInt(((this.difference / 1000) / 3600) % 60);
    if (hours < 10) {
        hours = '0' + hours
    };
    htmlElements.output.innerText = `${hours}:${minutes}:${seconds}.${miliseconds}`;
}

Stopwatch.prototype.stopTimer = function () {
    clearInterval(this.time);
    htmlElements.startBtn.addEventListener('click', this.startTimer.bind(this), {
        once: true
    });
    this.currentDifference = this.difference;
}

Stopwatch.prototype.resetTimer = function () {
    this.currentDifference = 0;
    htmlElements.output.innerText = '00:00:00.0';
}

export {
    Stopwatch
}