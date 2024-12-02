const fs = require('fs');

const data = fs.readFileSync("./typescript/day1/input.txt", "utf8");

const inputArray = data.toString().split("\n");

const leftArray = inputArray.map(x => parseInt(x.split("   ")[0])) ;
const rightArray = inputArray.map(x => parseInt(x.split("   ")[1])) ;
 

let simScore = 0;

for (let index = 0; index < leftArray.length; index++) {
    const lItem = leftArray[index];
    console.log("looking at item " + lItem);
    
    for (let i = 0; i < rightArray.length; i++) {
        const rItem = rightArray[i];
        let tempSimScore = 0;
        if (lItem === rItem) {
            console.log("found match");
            tempSimScore += 1;
        }
        tempSimScore = tempSimScore * lItem;
        simScore += tempSimScore;
    }
}


console.log(simScore);