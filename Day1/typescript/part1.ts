import fs from 'node:fs';

const data = fs.readFileSync("../input.txt", "utf8");

const inputArray = data.toString().split("\n");

const leftArray = inputArray.map(x => parseInt(x.split("   ")[0])) ;
const rightArray = inputArray.map(x => parseInt(x.split("   ")[1])) ;

console.log(leftArray);
console.log(rightArray);

leftArray.sort();
rightArray.sort();


console.log(leftArray);
console.log(rightArray);

const result = leftArray.map((x, i) => Math.abs(x - rightArray[i])).reduce((a, b) => a + b);

console.log(result);
