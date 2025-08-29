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
