const htmlElements = {
    output: document.querySelector('.container .output')
};

function Clock() {}

Clock.prototype.run = function () {
    this.timerId = setInterval(this.onIntervalNextTick.bind(this), 1000);
}

Clock.prototype.stop = function () {
    clearInterval(this.timerId);
}

Clock.prototype.onIntervalNextTick = function () {
    this.time = new Date();
    this.outputTime = this.time.toTimeString().split(' ', 1).join('');
    htmlElements.output.innerText = this.outputTime;
}

export {
    Clock
}