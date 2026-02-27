// --- Practice - 3 ---
// --- Problem 7 (Solved) ---

const price = 6500;
if (price > 6000) {
    const discount = (price / 100) * 15;
    const pay = price - discount;
    console.log(pay);
} else if (price > 3000) {
    const discount = (price / 100) * 5;
    const pay = price - discount;
    console.log(pay);
} else {
    console.log(price);
}

let bill = 500;
const age = 65;
if (age < 12) {
    bill = 0;
    const pay = bill;
    console.log("Free Food", pay + " taka");
} else if (age > 60) {
    const discount = (bill / 100) * 50;
    const pay = bill - discount;
    console.log(pay);
} else {
    console.log(bill);
}

const bankBalance = 2500;
if (bankBalance > 5000) {
    console.log("Marry me");
} else if (bankBalance > 1000) {
    console.log("Amazing Life");
} else {
    console.log("Deposit Kor");
}

const studentMarks = 33;
if (studentMarks > 80) {
    console.log("A+");
} else if (studentMarks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

const bookPage = 1000;
if (bookPage > 500) {
    console.log("heart-attack size book");
} else if (bookPage > 100) {
    console.log("Mid-size book");
} else {
    console.log("Small book");
}

// if (){
//     console.log()
// } else if (){
//     console.log()
// } else {
//     console.log()
// }

const temperature = 15;
if (temperature > 20) {
    console.log("Hot Hot")
} else if (temperature < 0) {
    console.log("Ice")
} else {
    console.log("Cool Cool")
}

const playerLevel = 49;
if (playerLevel > 50) {
    console.log("Pro Gamer");
} else if (playerLevel < 10) {
    console.log("novice");
} else {
    console.log("Expert");
}