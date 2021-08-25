// Program Name: Simple Timer
// Written By: Tyler Shelton
// Written On: August 15, 2021
// Description: This program takes an unlimited number of alarms (in seconds) via the 
//              command line and sets a beeper for each valid input (Number > 0)
// Change Log:
//   1) Date: August 25, 2021
//      By: Tyler Shelton
//      Changes: Refactored the code and modularized the beep into a separate function.  Also added comments.

// create an empty array that will store the alarms
const alarms = [];
// Place all of the timers that were provided via command line arguments into the alarms array
process.argv.slice(2).forEach(element => alarms.push(Number(element)));

// function that will set a beep alarm for the time given in seconds
const alarmBeep = timer => {
  setTimeout(() => {
    // Set the computer to beep('\x07') for each value passed through
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