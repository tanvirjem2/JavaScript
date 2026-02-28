// --- Practice - 3 ---
// --- Problem - 5 (Solved) ---

// --> push = push add element end of the array.
// --> pop = pop remove element end of the array.
// --> shift = shift remove element start of the array.
// --> unshift = unshift add element start of the array.

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
arr.push(60);
console.log(arr);

const names = ['sojib', 'sagor', 'sakib', 'sohel'];
names.push('sumon');
console.log(names);

const games = ['Free Fire', 'PUBG Mobile', 'Candy Crash', 'Temple Run'];
games.pop();
console.log(games);

const num = [24, 36, 48, 60];
num.unshift(12);
console.log(num);

const books = ['JavaScript', 'Chokher Bali', 'Bonkesh', 'Faluda', 'Sherlock Homes'];
books.shift();
console.log(books);