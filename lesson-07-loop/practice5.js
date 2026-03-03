// --- Practice - 5 ---
// --- Problem - 6 (Solved) ---


for (let i = 20; i <= 50; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}


for (let i = 40; i <= 80; i++) {
    if (i % 5 === 0 && i % 7 === 0) {
        console.log(i);
    }
}


let sum = 0;
for (let i = 1; i <= 40; i++) {
    if (i % 13 === 0) {
        sum = sum + i;
    }
}
console.log(sum);


for (let i = 1; i <= 50; i = i + 4) {
    console.log(i);
}

for (let i = 0; i <= 100; i++) {
    if (i % 6 === 0 && i % 9 === 0) {
        console.log(i);
    }
}


let sum1 = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
        sum1 = sum1 + i
        // console.log("Sum1: " + sum1); ==> just checking...
    }
}
console.log(sum1);