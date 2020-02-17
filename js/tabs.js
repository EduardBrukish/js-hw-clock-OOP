import {
    clock,
    stopwatch
} from "./main.js";

const htmlElements = {
    links: document.querySelectorAll('.container .links a'),
    buttons: document.querySelectorAll('.container .buttons button'),
};

function Tabs() {};

Tabs.prototype.init = function () {
    htmlElements.links.forEach(item => {
        item.addEventListener('click', selectLinks)
    });

    htmlElements.links.forEach(item => {
        if (item.dataset.mode === 'stopwatch') {
            item.addEventListener('click', showButtons);
        } else {
            item.addEventListener('click', hideButtons);
        }
    });

}

function selectLinks() {
    this.classList.add('selected');
    htmlElements.links.forEach(item => {
        if (this == item) {
            return
        };
        item.classList.remove('selected');
    });
}

function showButtons() {
    htmlElements.buttons.forEach(item => item.classList.remove('hidden'));
    clock.stop();
    stopwatch.showTimer();
}

function hideButtons() {
    htmlElements.buttons.forEach(item => item.classList.add('hidden'));
    clearInterval(stopwatch.time);
    clock.run();
}

export {
    Tabs
};