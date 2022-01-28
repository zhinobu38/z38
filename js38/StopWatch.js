function StopWatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running) {
            throw new Error('Stopwatch is running!');
        }
        startTime = new Date();
        running = true;
        return ('Started!');
    };

    this.stop = function() {
        if (!running) {
            throw new Error('Stopwatch is already stopped!');
        }
        endTime = new Date();
        duration += (endTime.getTime()-startTime.getTime()) / 1000;
        running = false;
        return ('Stopped: ' + this.duration);
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = null;
        duration = 0;
        return ('Reset!');
    };

    Object.defineProperty(this, 'duration', {
        get: function() {
            return (duration.toFixed(3));
        }
    });
}

const sw = new StopWatch();