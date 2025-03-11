const maxLimit = Number(prompt("Enter the Limit of the Double Loop:"));
console.log("Result:");

for (let i = 0; i <= maxLimit; i++) {
    for (let j = 0; j <= maxLimit; j++) {
        console.log(`[${i}] [${j}] Added value is ${i + j}`);
    }
}
