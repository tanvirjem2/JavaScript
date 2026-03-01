// --- Practice - 4 ---
// --- Problem - 6 (Solved) ---

const fruits = ['apple', 'banana', 'mango', 'lychee'];
if (fruits.includes('mango') === true) {
    console.log("We have mango");
} else {
    console.log("we don't have mango, climb up tree");
}

const names = ['babul', 'alif', 'choton'];
const index = names.indexOf('babul');
console.log(index);

const friendsName = ['rimon', 'rifat', 'rajib'];
console.log(friendsName.indexOf('rifat'));

const cities = ['Dhaka', 'Chittagong', 'Sylhet'];
cities.push('rajshahi');
const exist = cities.includes('RajShahi');
console.log(cities, exist);

const weather = ['sunny', 'rain', 'spring'];
if (weather.includes('rain') === true) {
    console.log('I need umbrella');
} else {
    console.log('No rain no pain');
}

const games = ['football', 'cricket', 'volleyball'];
console.log(games.includes('badminton'));