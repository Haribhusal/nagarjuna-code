
// if (condition_check) {
//     statements
// } else {
//     statements
// }

let isLoggedin = false;

if (isLoggedin) {
    console.log("You are welcome")
} else {
    console.log("Please login first")
}


let date = new Date();
// console.log(date.getDay())
let day = date.getDay();

if (day == 0) {
    console.log("Sunday")
} else if (day == 1) {
    console.log("Monday")
}
else if (day == 2) {
    console.log("Tuesday")
}
else if (day == 3) {
    console.log("Wednesday")
}
else if (day == 4) {
    console.log("Thrusday")
}
else if (day == 5) {
    console.log("Friday")
} else {
    console.log("Saturday")
}