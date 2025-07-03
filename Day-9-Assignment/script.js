const logBox = document.getElementById("resultBox");

function writeLog(msg) {
  logBox.innerText += msg + "\n";
}

function clearLog() {
  logBox.innerText = "";
}

function setAlarmTime() {
  clearLog();
  const time = document.getElementById("alarmTime").value;
  const msg = document.getElementById("alarmMsg").value;
  const now = new Date();
  const alarmDate = new Date(time);
  const diff = alarmDate - now;

  if (isNaN(diff) || diff <= 0) {
    writeLog("Please enter a valid future time.");
    return;
  }

  writeLog(" Alarm will ring at " + alarmDate.toLocaleString());
  setTimeout(() => writeLog(" Alarm: " + msg), diff);
}

function computeTax() {
  clearLog();
  const base = parseFloat(document.getElementById("amount").value);
  const percents = document.getElementById("taxRates").value.split(',').map(p => parseFloat(p.trim()));
  if (isNaN(base) || percents.some(p => isNaN(p))) {
    writeLog(" Invalid input for amount or tax percentages.");
    return;
  }
  let total = base;
  percents.forEach(rate => total += (base * rate / 100));
  writeLog("Total with tax: ₹" + total.toFixed(2));
}

function runCountdown() {
  clearLog();
  let start = parseInt(document.getElementById("countStart").value);
  if (isNaN(start) || start <= 0) {
    writeLog("Enter a valid number greater than 0.");
    return;
  }

  function tick(n) {
    if (n <= 0) {
      writeLog("Blast Off!");
      return;
    }
    writeLog("⏳ " + n);
    setTimeout(() => tick(n - 1), 1000);
  }

  tick(start);
}

function checkIfEven() {
  clearLog();
  const num = Math.abs(parseInt(document.getElementById("evenCheck").value));
  if (isNaN(num)) {
    writeLog("Not a number!");
    return;
  }

  function isEven(n) {
    return n === 0 ? true : n === 1 ? false : isEven(n - 2);
  }

  writeLog(`${num} is ${isEven(num) ? "Even" : "Odd"}`);
}

function doMath() {
  clearLog();
  const a = parseFloat(document.getElementById("numA").value);
  const b = parseFloat(document.getElementById("numB").value);
  const op = document.getElementById("opSelect").value;

  if (isNaN(a) || isNaN(b)) {
    writeLog(" Invalid numbers entered.");
    return;
  }

  const result = op === "add" ? a + b : a * b;
  writeLog(`Result of ${op === "add" ? "Addition" : "Multiplication"}: ${result}`);
}
