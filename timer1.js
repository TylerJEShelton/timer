const alarms = [];
const alarmsToSet = [];

process.argv.slice(2).forEach(element => alarms.push(Number(element)));

if (alarms.length === 0) {
  return;
}

alarms.forEach(alarm => {
  if (typeof alarm === "number" && alarm > 0) {
    alarmsToSet.push(alarm);
  }
});
alarmsToSet.sort((a, b) => a - b);

alarmsToSet.forEach(alarm => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, alarm * 1000);
});
