// --- Practice - 2 ---
// --- Problem - 8 (Solved) ---

// --- 1 ---
const player = {
  name: "Tanvir",
  age: 23,
  sports: "Football",
  team: "United",
};

console.log(player.team);

// --- 2 ---
const laptop = {
  brand: "Asus f16",
  price: 165000,
  hardDisc: "1 TB",
  ram: 16,
  screenSize: 16,
};

console.log(laptop.screenSize);

// --- 3 ---
const favPlace = {
  name: "Cox's Bazar",
  distance: "400km",
  popularity: "high",
};

console.log(favPlace["popularity"]);

// --- 4 ---
const phone = {
  brand: "Nokia",
  color: "black",
  price: 5000,
};

console.log(phone["price"]);

// --- 5 ---
const library = {
  name: "Public Library",
  location: "Dhaka",
  books: 5000,
};

console.log(library.location);

// --- 6 ---
const movie = {
  title: "Inception",
  director: "Nolan",
  rating: 9,
};

console.log(movie["rating"]);

// --- 7 ---
const college = {
  name: "ndc",
  established: 1949,
  groups: ["Science", "Arts", "Commerce"],
};

console.log(college.groups[1]);

// --- 8 ---
const family = {
  father: {
    name: "MD Shafiqul Alam",
    age: 58,
    profession: "Police",
  },
  mother: {
    name: "MST Aleya Ferdousi",
    age: 45,
    profession: "Household",
  },
};

console.log(family.mother.age);
console.log(family.father.age);
console.log(family.father.age + family.mother.age);
