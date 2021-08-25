// create an empty array that will store the alarms
const alarms = [];
// Place all of the timers that were provided via command line arguments into the alarms array
process.argv.slice(2).forEach(element => alarms.push(Number(element)));

// function that will set a beep alarm for the time given in seconds
const alarmBeep = timer => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, timer * 1000);
};

// If no timers are passed, return an empty array
if (alarms.length === 0) {
  return;
}

// loop through the alarms array and set a beep for valid numbers > 0
alarms.forEach(alarm => {
  if (typeof alarm === "number" && alarm > 0) {
    alarmBeep(alarm);
  }
});