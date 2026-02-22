// --- Examples ---
// --- parseInt() ---
// --- parseFloat() ---
const fatherAge = '50';
const fatherAgeNumber = parseInt(fatherAge);
console.log(fatherAgeNumber);


// --- toFixed() ---
const first = 12.13568;
const second = 31.22564;
// const total = first + second;
// const totalNumber = parseFloat(total.toFixed(2));
// console.log(totalNumber);

// --- Practice - 5 ---
// --- Problem 7 (Solved) ---

const input = '20';
const inputNumber = parseInt(input);
const secondInput = 10;
const total = inputNumber + secondInput;
console.log(total);

const input2 = 3.14159;
const inputImprove = parseInt(input2);
console.log(inputImprove);

const word = 'premikBoy';
const wordConvert = parseInt(word);
console.log(wordConvert);
// --- Output: NaN (Not a Number) ---

const number1 = 3.456;
const number2 = 2.789;
const total2 = number1 + number2;
const total2Number = parseFloat(total2.toFixed(2));
console.log(total2Number);

const num1 = '56.78';
const num1Convert = parseFloat(num1);
const num2 = '12.34';
const num2Convert = parseFloat(num2);
const total3 = num1Convert + num2Convert;
console.log(total3);

const bad = '10.5678';
const badNumber = parseFloat(bad);
const bad2 = '5.4321';
const bad2Number = parseFloat(bad2);
const total4 = badNumber + bad2Number;
const total4Number = parseFloat(total4.toFixed(1));
console.log(total4Number);

const final = '42.456789754';
const finalNumber = parseFloat(final);
const finalNumberConvert = parseFloat(finalNumber.toFixed(3));
console.log(finalNumberConvert);