
let studentName = "Suraj";
let studentAge = 22;
let address = "New Baneshwor"
let isGraduated = false



let student = {
    name: "Suraj",
    age: 22,
    address: "Ktm",
    isGraduated: false,
    explainer: function () {
        console.log("Hello I am " + this.name + "I am " + this.age + "Years old")
    }
}
student.address = "Lalitpur"

// console.log(student.name)  // Dot Notation
console.log(student['address'])  // Bracket Notation
student.explainer();