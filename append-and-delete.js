"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {
  if (k >= s.length + t.length) {
    return "Yes";
  } else {
    let sArray = s.split("");
    let tArray = t.split("");
    let commonCount = 0;
    for (let i = 0; i < sArray.length; i++) {
      if (sArray[i] !== tArray[i]) {
        break;
      } else {
        commonCount++;
      }
    }

    let totalneeded =
      sArray.length - commonCount + (tArray.length - commonCount);
    if (totalneeded <= k && (k - totalneeded) % 2 === 0) {
      return "Yes";
    } else {
      return "No";
    }
  }
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const t = readLine();

  const k = parseInt(readLine(), 10);

  let result = appendAndDelete(s, t, k);

  ws.write(result + "\n");

  ws.end();
}
