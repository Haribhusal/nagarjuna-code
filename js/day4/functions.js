// Functions
// Syntax

// function function_name(parameter1, parameter2, ....) {
// statements
// return something (Optional)
// }

// example
// function addTwoNumbers(m, n) {
//     let sum = m + n;
//     console.log(sum)
//     return sum
// }
// let result = addTwoNumbers(4, 6);
// console.log(result)


const addTwoNumbers = (a, b) => {
    let sum = a + b
    return sum
}

const squareNum = a => a * a

let res = addTwoNumbers(2, 3)
console.log(res)