
function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
      return "Invalid Input";
    }
  
    if (serialNumber < waitingTimes.length) {
      return "Invalid Input";
    }
  
    let totalTime = 0;
    for (let time of waitingTimes) {
      totalTime += time;
    }
    let totalcandidate = waitingTimes.length;
  
    let avgTime = Math.round(totalTime / totalcandidate);
  
    let herSerial = serialNumber - 1;
  
    let restOfCandidate = herSerial - totalcandidate;
  
    let waitingPeriod = avgTime * restOfCandidate;
  
    return waitingPeriod;
  }
  