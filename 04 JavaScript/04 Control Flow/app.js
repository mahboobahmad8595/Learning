//! Control Flow

// 1. IF                             1 condition
// 2. IF .. ELSE                     2 options
// 3. IF .. ELSE IF .. IF            Multiple Options
// 4. switch
// 5. ?:

// note : true → code runs , false → code doesn't run.

//? 1. If

// var userAge = 18;
// var userInput = prompt("Enter Your Age")

// if(userInput >= userAge){
//     console.log("Adult");
// }

//? 2. If & Else

// var userAge = 18;
// var userInput = prompt("Enter Your Age")

// if(userInput >= userAge){
//     console.log("Adult");
// }
// else{
//     console.log("Minor");
// }

//? 3. If & Else If & Else

// var a = 90;
// var b = 80;
// var c = 70;
// var userInput = prompt("Enter Your Total Marks");

// if(userInput > 100){
//     alert("Enter a number between 1 to 100");
//     prompt("Enter Your Total Marks");
// }
// else if(userInput >= a){
//     console.log("Grade A");
// }
// else if(userInput >= b){
//     console.log("Grade B");
// }
// else if(userInput >= c){
//     console.log("Grade C");
// }
// else{
//     console.log("Fail");
// }

//! OR GATE & AND GATE

// 1. OR GATE           ||          // Koi Ek Value True Ho
// 2. AND GATE          &&          // Dono Values True hon   (Precidence Zyada)

//? AND GATE Example &&
// var age = prompt("Enter Your Age");
// var qualification = prompt("Enter Your Qualificaion");

// if(age >= 18 && qualification >= 10){
//     console.log("You Can Go Abroad");
// }
// else{
//     console.log("You Cant Go Abroad");
// }

// var marks = prompt("Enter Your Marks");
// var hasAmmount = prompt("Enter Your Amount");

//? OR GATE Example
// if(marks >= 70 || hasAmmount >= 10000){
//     console.log("You Can Join Us");
// }
// else{
//     console.log("You Cant Join Us");
// }

//! Nested

// var marks = prompt("Enter Your Marks");

// if(marks > 50){

//     if(marks >= 50 && marks <= 69){
//         console.log("Pass");
//     }
//     else if(marks >= 70 && marks <= 89){
//         console.log("Good");
//     }
//     else if(marks >= 90 && marks <= 100){
//         console.log("Excellent");
//     }
// }
// else{
//     console.log("Fail");
// }

//! Differnt Ways

// var userInput = prompt("Enter a number & Check Even or Odd")
// if(userInput % 2 === 0){
//     console.log("Even");
// }
// else{
//     console.log("Odd");
// }

// var isRaining = true;
// if(isRaining){
//     console.log("Take an Umbrella");
// }

// var isRaining = false;
// if(isRaining){
//     console.log("Take an Umbrella");
// }

// var num1 = +prompt("Enter Num 01")
// var num2 = +prompt("Enter Num 02")
// var operator = prompt("+ - * /")

// if(operator === "+"){
//     alert(num1 + num2);
// }
// else if(operator === "-"){
//     alert(num1 - num2);
// }
// else if(operator === "*"){
//     alert(num1 * num2);
// }
// else if(operator === "/"){
//     alert(num1 / num2);
// }
// else{
//     alert("Enter a valid operator");
// }

//! Switch

// var day = +prompt("Enter a Day");
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;

//     default :
//     console.log("Enter a Valid Number");
// }

// var age = prompt("Enter Your Age");
// switch(true){

//     case(age >= 18):
//     console.log("Adult");
//     break;
    
//     case(age < 18):
//     console.log("");
//     break;

//     default: 
//     console.log("Enter a Valid Num");
// }

