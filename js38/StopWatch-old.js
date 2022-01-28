//Too complex and not usable

function StopWatch() {
    let time = { time1: 0, time2: 0};
    let flag = 0;
    //flag 0 : not even start
    //flag 1 : start
    //flag 2 : stop

    this.start = function() {
        switch (flag){
            case 0 : 
                flag = 1;
                time.time1 = Date.now();
                return ('StopWatch is started.');
                break;
            case 1 :
                throw new Error('StopWatch is already started!');
                break;
            case 2 :
                flag = 1;
                time.time1 = 0;
                return ('StopWatch is started.');
                break;
        }
    }

    this.stop = function() {
        switch (flag){
            case 0 : 
                throw new Error('StopWatch is not started yet.');
                break;
            case 1 :
                flag = 2;
                time.time2 = Date.now();
                return ('Stopped! : ' + this.duration());
                break;
            case 2 :
                throw new Error('StopWatch is already stoped!');
                break;
        }
    }

    this.reset = function() {
        switch (flag){
            case 0 : 
                return ('StopWatch is not started yet.');
                break;
            case 1 :
            case 2 :
                flag = 0;
                time.time1 = 0;
                time.time2 = 0;
                return ('StopWatch is reset.');
                break;
        }
    }

    this.duration = function() {
        let tempTime;
        switch (flag){
            case 0 : 
                tempTime = 0;
                break;
            case 1 :
                tempTime = Date.now();
                break;
            case 2 :
                tempTime = time.time2;
                break;
        }
        let ms = tempTime - time.time1;
        let sec = (ms/1000).toFixed(2);
        let min = Math.floor(sec/60);
        let hr = Math.floor(min/60);
        return (hr + ':' + min + ':' + sec);
    }

}

const sw = new StopWatch();
