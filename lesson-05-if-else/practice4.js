// --- Practice - 4 ---
// --- Problem 5 (Solved) ---

const birthdayInvitation = true;
const myMoney = 1000;
if (birthdayInvitation === true) {
    if (myMoney > 1000) {
        console.log("Buy Gift");
    } else {
        console.log("Empty Handed");
    }
} else {
    console.log("Unfriend");
}

const guestTea = true;
const guestBiscuit = false;
if (guestTea === true) {
    if (guestBiscuit === true) {
        console.log("Here you go Tea With Biscuits");
    } else {
        console.log("Only tea ready");
    }
    console.log();
} else {
    console.log("Watch Star Jolsha");
}

const isActive = false;
const isSubscription = true;
if (isActive === true) {
    if (isSubscription === true) {
        console.log("Show Premium Version");
    } else {
        console.log("Use the Free Version");
    }
} else {
    console.log("user is not active");
}

const freezeFood = true;
const foodDeliveryApp = true;
if (freezeFood === true) {
    console.log("Food Cook");
} else {
    if (foodDeliveryApp === true) {
        console.log("Order Food");
    } else {
        console.log("I am roja");
    }
}

const partyGuest = 90;
const guestGift = true;
if (partyGuest > 100) {
    if (guestGift === true) {
        console.log("Lets party all night");
    } else {
        console.log("I will party with myself");
    }
} else {
    console.log("I will party with myself");
}
