//! Ans 01
// var arr = [[] , [] , []];

//! Ans 02
// var arr = [
//     [0 , 1  , 2 , 3],
//     [1 , 0  , 1 , 2],
//     [2 , 1  , 0 , 1]
// ]

// console.log(arr);

//! Ans 03
// for(var i = 1; i <= 10; i++){
//     console.log(i);
// }

//! Ans 04
// var table = prompt("Enter a Num");
// var times = prompt("How many time do you want to multiply")
// for(var i = 1; i <= times; i++){
//     console.log(table + " x " + i + " = " + table * i);
// }

//! Ans 05

// var fruits = ["Apple" , "Mango" , "Banana" , "Orange" , "Strawberry"];
// for(var i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

//! Ans 06

// for(var i = 1; i <= 15; i++){
//     console.log(i);
// }

// for(var i = 10; i > 0 ; i--){
//     console.log(i);
// }

// for(var i = 0; i <= 20; i += 2){
//     console.log(i);
// }

// for(var i = 1; i <= 20; i += 2){
//     console.log(i);
// }

// for(var i = 2; i <= 20; i += 2){
//     console.log(i + "K");
// }

//! Ans 07

// var items = ["cake", "apple" , "pie", "cookie", "chips", "patties"]
// var userInput = prompt("Enter a Item");
// userInput = userInput.toLowerCase().trim()
// var found = false;
// for(var i = 0; i < items.length; i++){
//     if(userInput === items[i]){
//         found = true;
//         break;
//     }
// }

// if(found){
//     console.log(userInput + " is available");
// }
// else{
//     console.log(userInput + " is not available");
// }

//! Ans 08

// var num = [24, 53, 78, 91, 12];
// var largest = num[0]

// for(var i = 0; i < num.length; i++){
//     if(num[i] > largest){
//         largest = num[i]
//     }
// }
// console.log("Largest Num is " + largest);


// num 24 > 24 largest  false
// num 53 > 24 largest  true
// num 78 > 53 largest  true
// num 91 > 78 largest  true
// num 12 > 91 largest  false