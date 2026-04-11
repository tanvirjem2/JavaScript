// --- Practice - 3 ---
// --- Problem - 9 (Solved) ---

// --- 1 ---
const book = {
  name: "JavaScript",
  writer: "Jhankar Mahbub",
  price: 667,
};

console.log(Object.keys(book));
console.log(Object.values(book));

// --- 2 ---
const article = {
  title: "Learning JS",
  category: "Programming",
};

const articleKeys = Object.keys(article);
const hasAuthor = articleKeys.includes("author");

console.log(hasAuthor);

// --- 3 ---
const laptop = {
  brand: "Dell",
  model: "Inspiron",
  price: 45000,
};

for (const key in laptop) {
  const value = laptop[key];
  console.log(key, value);
}

// --- 4 ---
const phone = {
  brand: "Samsung",
  model: "Galaxy S21",
  price: 85000,
};

const keys = Object.keys(phone);
for (const key of keys) {
  console.log(key, phone[key]);
}

// --- 5 ---
const bike = {
  brand: "Hero",
  price: 120000,
  model: "Splendor",
};

console.log(Object.values(bike));

// --- 6 ---
const books = {
  book1: "Harry Potter",
  book2: "The Hobbit",
  book3: "Game of Thrones",
};

for (const key in books) {
  console.log(keys, books[key]);
}

// --- 7 --- [There is a error , I will solve it....]
const numbers = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};

for (const key in numbers) {
  let value = 0;
  let value1 = numbers[key];
  value = value + value1;
  let totalValue = value;
  console.log(totalValue);
}

// --- 8 ---
const player = {
  name: "Messi",
  team: "Argentina",
  goals: 91,
};

console.log(Object.values(player));

// --- 9 --- [I think here is a problem...]
const building = {
  floors: 10,
  address: {
    street: "Main Road",
    city: "Dhaka",
  },
  type: "Commercial",
};

for (const key in building) {
  console.log(key, building[key]);
}
