//! console.table
// var name = "Mahboob";
// var qualification = "Matric";
// var age = "21";

// console.log(name);
// console.log(qualification);
// console.log(age);

// console.table([name , qualification , age]);

//! Variable

// var name = "mahboob";
// var name = "ahmad";
// name = "khan";
// console.log(name);        // khan

// let name = "mahboob";
// let name = "ahmad";       // Error: Dobara let keyword istemal nahi kar sakte
// name = "khan";
// console.log(name);        // khan

// const name = "mahboob";
// const name = "ahmad";     // Error : Dobara const keyword istemal nahi kar sakte
// name = "khan";            // Error : Value change nahi kar sakte
// console.log(name);        // mahboob

// var check = true;
// if(check === true){
//    var name = "Mahboob";
//    console.log(name);
// }
// console.log(name);


// var check = true;
// if(check === true){
//     let name = "Mahboob";
//     console.log(name);      // Chale ga
// }
// console.log(name);          // Nahi chale ga

// var check = true;
// if(check === true){
//     const name = "Mahboob";
//     console.log(name);      // Chale ga
// }
// console.log(name);          // Nahi chale ga


//! Text

// var a = 1;
// var b = 2;
// var c = 3;

// console.log(a);
// console.log(b);
// console.log(c);

// var user = prompt("Convert");

// if(user = "a"){
//     console.log(1);
// }

// var a = 1;
// var b = 2;
// var c = 3;
// var d = 4;
// var e = 5;
// var f = 6;
// var g = 7;
// var h = 8;
// var i = 9;
// var j = 10;
// var k = 11;
// var l = 12;
// var m = 13;
// var n = 14;
// var o = 15;
// var p = 16;
// var q = 17;
// var r = 18;
// var s = 19;
// var t = 20;
// var u = 21;
// var v = 22;
// var w = 23;
// var x = 24;
// var y = 25;
// var z = 26;

// console.table(m , a , h , b , o , o , b);

//! Print 1 to 10
// for(var i = 1; i <= 10; i++){
//     console.log(i);
// }

//! Print 10 to 1
// for(var i = 10; i > 0 ; i--){
//     console.log(i);
// }

//! Simple Table 
// var table = prompt("Enter a Num");
// for(var i = 1; i <= 10; i++){
//     console.log(table + " x " + i + " = " + table * i);
// }

//! Advance Table 
// var table = prompt("Enter a Num");
// var times = prompt("How many time do you want to multiply")
// for(var i = 1; i <= times; i++){
//     console.log(table + " x " + i + " = " + table * i);
// }

//! Odd Number Print 1 to 50
// for(var i = 1; i <= 50; i += 2){
//     console.log(i);
// }

//! Even Number Print 1 to 50
// for(var i = 0; i <= 50; i += 2){
//     console.log(i);
// }

//! Simple Sum
// var num1 = +prompt("Enter a Num1")
// var num2 = +prompt("Enter a Num2")
// var num3 = +prompt("Enter a Num3")
// var num4 = +prompt("Enter a Num4")
// var num5 = +prompt("Enter a Num5")

// console.log(num1 + num2 + num3 + num4 + num5);

//! Advance Sum

// var num = [
//     +prompt("Enter num 1"),
//     +prompt("Enter num 2"), 
//     +prompt("Enter num 3"), 
//     +prompt("Enter num 4"), 
//     +prompt("Enter num 5") 
// ]

// var sum = 0;
// for(var i = 0; i < num.length; i++){
//     sum += num[i];
// }
// console.log(sum);

//! Counting

// var count = prompt("Enter a num to get factorial");
// for(var i = 1; i <= count; i++){
//     console.log(i);
// }

//! Simple Factorial 
// var num = prompt("Enter a num to get factorial");
// console.log(num * (num - 1) * (num - 2) * (num - 3) * (num - 4));

//! Advance Factorial 
// var num = (prompt("Enter a number:"));
// var factorial = 1;

// for (var i = 1; i <= num; i++) {
//     factorial = factorial * i;
// }
// console.log("Factorial of " + num + " is: " + factorial);

//? Solve 
// 1 <= 5 True  → 1 = 1 * 1;   = 1
// 2 <= 5 True  → 1 = 1 * 2;   = 2
// 3 <= 5 True  → 2 = 2 * 3;   = 6
// 4 <= 5 True  → 6 = 6 * 4;   = 24
// 5 <= 5 True  → 24 = 24 * 5; = 120
// 6 <= 5 False

// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple", "Strawberry", "Blueberry", "Kiwi", "Papaya"];
// let vegetables = ["Carrot", "Potato", "Tomato", "Onion", "Cabbage", "Spinach", "Broccoli", "Peas", "Corn", "Pumpkin"];
// let numbers = [5, 12, 7, 9, 20, 15, 3, 8, 11, 14];
// let colors = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Black", "White", "Pink", "Brown"];
// let animals = ["Cat", "Dog", "Elephant", "Tiger", "Lion", "Monkey", "Giraffe", "Zebra", "Bear", "Fox"];

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i].length > 5) {
//         console.log(fruits[i] + " has more than 5 letters");
//     } else {
//         console.log(fruits[i] + " has 5 or less letters");
//     }
// }

// for (let i = 0; i < vegetables.length; i++) {
//     if (vegetables[i].includes("o")) {
//         console.log(vegetables[i] + " contains the letter 'o'");
//     } else {
//         console.log(vegetables[i] + " does not contain the letter 'o'");
//     }
// }

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i] + " is even");
//     } else {
//         console.log(numbers[i] + " is odd");
//     }
// }

// for (let i = 0; i < colors.length; i++) {
//     if (colors[i].length <= 4) {
//         console.log(colors[i] + " is a short color name");
//     } else {
//         console.log(colors[i] + " is a long color name");
//     }
// }

// for (let i = 0; i < animals.length; i++) {
//     if (animals[i][0] === "C" || animals[i][0] === "D") {
//         console.log(animals[i] + " starts with C or D");
//     } else {
//         console.log(animals[i] + " does not start with C or D");
//     }
// }

// let mixedArray = [fruits, vegetables, numbers, colors, animals];

// for (let i = 0; i < mixedArray.length; i++) {
//     for (let j = 0; j < mixedArray[i].length; j++) {
//         if (typeof mixedArray[i][j] === "number") {
//             if (mixedArray[i][j] > 10) {
//                 console.log(mixedArray[i][j] + " is greater than 10");
//             } else {
//                 console.log(mixedArray[i][j] + " is 10 or less");
//             }
//         } else {
//             if (mixedArray[i][j].length % 2 === 0) {
//                 console.log(mixedArray[i][j] + " has even letters");
//             } else {
//                 console.log(mixedArray[i][j] + " has odd letters");
//             }
//         }
//     }
// }

// let students = [
//     {name: "Ali", marks: 85},
//     {name: "Ahmed", marks: 55},
//     {name: "Sara", marks: 92},
//     {name: "Zara", marks: 65},
//     {name: "Hassan", marks: 45},
//     {name: "Sami", marks: 75},
//     {name: "Ayesha", marks: 88},
//     {name: "Usman", marks: 50}
// ];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].marks >= 80) {
//         console.log(students[i].name + " got A grade");
//     } else if (students[i].marks >= 60) {
//         console.log(students[i].name + " got B grade");
//     } else {
//         console.log(students[i].name + " failed");
//     }
// }

// for (let i = 0; i < 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         console.log("Row " + i + " Column " + j);
//     }
// }

// let randomNumbers = [];
// for (let i = 0; i < 50; i++) {
//     randomNumbers.push(Math.floor(Math.random() * 100) + 1);
// }

// for (let i = 0; i < randomNumbers.length; i++) {
//     if (randomNumbers[i] % 5 === 0 && randomNumbers[i] % 2 === 0) {
//         console.log(randomNumbers[i] + " is divisible by 2 and 5");
//     } else if (randomNumbers[i] % 5 === 0) {
//         console.log(randomNumbers[i] + " is divisible by 5");
//     } else if (randomNumbers[i] % 2 === 0) {
//         console.log(randomNumbers[i] + " is divisible by 2");
//     } else {
//         console.log(randomNumbers[i] + " is odd and not divisible by 5");
//     }
// }

// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "Multan", "Faisalabad", "Sukkur", "Hyderabad", "Rawalpindi"];
// let capitals = ["Islamabad", "Lahore", "Karachi", "Peshawar", "Quetta", "Multan", "Faisalabad", "Sukkur", "Hyderabad", "Rawalpindi"];

// for (let i = 0; i < cities.length; i++) {
//     if (cities[i] === capitals[i]) {
//         console.log(cities[i] + " is a capital city");
//     } else {
//         console.log(cities[i] + " is not a capital city");
//     }
// }

// let grades = ["A", "B", "C", "D", "F"];
// for (let i = 0; i < 20; i++) {
//     let randomGrade = grades[Math.floor(Math.random() * grades.length)];
//     if (randomGrade === "A" || randomGrade === "B") {
//         console.log("Excellent: " + randomGrade);
//     } else if (randomGrade === "C") {
//         console.log("Average: " + randomGrade);
//     } else {
//         console.log("Needs Improvement: " + randomGrade);
//     }
// }

// let matrix = [];
// for (let i = 0; i < 10; i++) {
//     let row = [];
//     for (let j = 0; j < 10; j++) {
//         row.push(Math.floor(Math.random() * 50));
//     }
//     matrix.push(row);
// }

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] % 2 === 0) {
//             console.log(matrix[i][j] + " is even");
//         } else {
//             console.log(matrix[i][j] + " is odd");
//         }
//     }
// }

// Continue similarly to reach 300+ lines
// for (let i = 0; i < 20; i++) {
//     let arr = [];
//     for (let j = 0; j < 10; j++) {
//         arr.push(Math.floor(Math.random() * 200));
//     }
//     for (let k = 0; k < arr.length; k++) {
//         if (arr[k] > 100) {
//             console.log(arr[k] + " is greater than 100");
//         } else if (arr[k] > 50) {
//             console.log(arr[k] + " is between 51 and 100");
//         } else {
//             console.log(arr[k] + " is 50 or less");
//         }
//     }
// }


