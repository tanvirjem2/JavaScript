// --- Practice - 3 ---
// --- Problem 7 (Solved) ---

const myMoney = 50;
const myFriendMoney = "50";
console.log(myMoney == myFriendMoney);
console.log(myMoney === myFriendMoney);

console.log("JavaScript" == 'JavaScript');
console.log("JavaScript" === 'JavaScript');
// Answer: Both are true because the value and type are the same.

console.log(25 == "25");
console.log(25 === "25");
// Answer: The first one is true because it only compares the value,
// while the second one is false because it compares both value and type.

console.log("apple" == "apple");
console.log("apple" === "apple");
// Answer: Both are true because the value and type are the same.

console.log("test" == "TEST");
console.log("test" === "TEST");
// Answer: JavaScript is case-sensitive, so both will be false because the value is different due to case sensitivity.

const variableX = 15;
const variableY = 20;
console.log(variableX != variableY);
console.log(variableX !== variableY);
// Answer: Both are true because the type is the same but the value is different.

const variableA = "hello";
const variableB = "Hello";
console.log(variableA == variableB);
console.log(variableA === variableB);
// Answer : Both are false because the value is different due to case sensitivity, even though the type is the same.