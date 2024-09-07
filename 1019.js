
// Read an integer value, which is the duration in seconds of a certain event in a factory, and inform it expressed in hours:minutes:seconds.

// Input
// The input file contains an integer N.


let value = 556;

const timer = [3600, 60]

let timeFormat = []

for (const time of timer) {
    const newTime = Math.floor(value / time)
    value -= time * newTime;
    timeFormat.push(newTime);
}

console.log(`${timeFormat[0]} : ${timeFormat[1]} : ${value}`);


// second way


function secondToMinHour(second){
    let hour=Math.floor(second/3600)
    let minute=Math.floor((second%3600)/60)
    let seconds=second%60

    console.log(` ${hour} : ${minute} : ${seconds}`);
}
secondToMinHour(200)


