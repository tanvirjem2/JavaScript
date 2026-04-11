// --- Practice - 4 ---
// --- Problem - 6 (Solved) ---

// --- 1 ---
const headphone = {
  brand: "Sony",
  price: 3000,
  color: "red",
};
Object.freeze(headphone);

headphone.ram = 8; // Not Allowed
console.log(headphone);

// --- 2 ---
const player = {
  name: "Messi",
  goals: 800,
  club: "Inter Miami",
};
Object.freeze(player);

player.height = "5 feet 2 inch";
console.log(player);

// --- 3 ---
const book = {
  title: "Harry Potter",
  author: "JK Rowling",
  pages: 500,
};
Object.seal(book);

book.author = "Joanne Rowling";
book.rating = 9;
console.log(book);

// --- 4 ---
const gadget = {
  name: "iphone",
  price: 120000,
  color: "Black",
};

delete gadget.price;
console.log(gadget);

// --- 5 ---
const animal = {
  name: "Tiger",
  location: "Sundarban",
};
Object.freeze(animal);

console.log(animal);

// --- 6 ---
const food = {
  name: "Pizza",
  price: 500,
  size: "Large",
};
Object.seal(food);

food.price = 1000;
console.log(food);
