const htmlElements = {};

// htmlElements.startBtn = document.querySelector('.container .buttons button.start');
// htmlElements.stopBtn = document.querySelector('.container .buttons button.stop');
// htmlElements.resetBtn = document.querySelector('.container .buttons button.reset');
// htmlElements.clock = document.querySelector('.container .links .clock');
// htmlElements.stopwatch = document.querySelector('.container .links .stopwatch');
// htmlElements.timer = document.querySelector('.container .links .timer');
// htmlElements.output = document.querySelector('.container .output');

// let buttons = [htmlElements.startBtn, htmlElements.stopBtn, htmlElements.resetBtn];
// let time;
// let difference;
// let currentDifference = 0;

// clockSettings.forEach(item => item.addEventListener('click', selectLinks));
// htmlElements.stopwatch.addEventListener('click', showButtons);
// htmlElements.clock.addEventListener('click', hideButtons);
// htmlElements.timer.addEventListener('click', hideButtons);

// function addListener(element, functionName) {
//     element.addEventListener('click', functionName);
// }

import {
    Clock
} from './clock.js';

import {
    Tabs
} from './tabs.js';

import {
    Stopwatch
} from './stopwatch.js';

let clock = new Clock();
let tabs = new Tabs();
let stopwatch = new Stopwatch();

clock.run();
tabs.init();
stopwatch.init();

// function showButtons() {
//     buttons.forEach(item => item.classList.remove('hidden'));

//     showTimer();

//     htmlElements.startBtn.addEventListener('click', startTimer);

//     htmlElements.resetBtn.addEventListener('click', resetTimer);
// }

// function hideButtons() {
//     buttons.forEach(item => item.classList.add('hidden'));
//     clearInterval(time);
//     resetTimer();
//     clock.run();
// }

// function showTimer() {
//     clearInterval(clock.timerId);
//     htmlElements.output.innerText = '00:00:00.0';
// }

// function startTimer() {
//     let start = Date.now();
//     htmlElements.startBtn.removeEventListener('click', startTimer);
//     htmlElements.resetBtn.removeEventListener('click', resetTimer);
//     htmlElements.stopBtn.addEventListener('click', stopTimer);
//     time = setInterval(letStart, 100, start);
// }

// function letStart(start) {
//     let end = Date.now();
//     difference = end - start + currentDifference;
//     let miliseconds = parseInt((difference % 1000) / 100);
//     let seconds = parseInt((difference / 1000) % 60);
//     if (seconds < 10) {
//         seconds = '0' + seconds
//     };
//     let minutes = parseInt(((difference / 1000) / 60) % 60);
//     if (minutes < 10) {
//         minutes = '0' + minutes
//     };
//     let hours = parseInt(((difference / 1000) / 3600) % 60);
//     if (hours < 10) {
//         hours = '0' + hours
//     };
//     htmlElements.output.innerText = `${hours}:${minutes}:${seconds}.${miliseconds}`;
// }

// function stopTimer() {
//     clearInterval(time);
//     htmlElements.startBtn.addEventListener('click', startTimer);
//     htmlElements.resetBtn.addEventListener('click', resetTimer);
//     currentDifference = difference;
// }

// function resetTimer() {
//     htmlElements.stopBtn.removeEventListener('click', stopTimer);
//     currentDifference = 0;
//     showTimer();
// }

export {
    clock,
    stopwatch
}

// export {
//     stopwatch
// }