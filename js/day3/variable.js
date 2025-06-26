// var country = "Nepal" // variable declaratin
// var country = "India" // variable re-declaration
// country = "China" // Re-assign the value // update value
// var variables are global scoped.


// let game = "Football"
// let game = "Cricket"  // can not be re-declared
// game = "Basketball"  // can be updated
// Let variables are block scoped


let age = 19
if (age > 18) {
    var collegeName = "Nagarjuna"
    let rule = "Access the content"
    console.log('inside', rule)
} else {
    let rule = "Denied the access"
    console.log(rule)
}

// console.log('outside', rule)
console.log('college ', collegeName)



const PI = 3.14
const PI = 3.1456;
PI = 3.15;