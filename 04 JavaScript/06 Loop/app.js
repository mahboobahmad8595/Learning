//! Loop
// Repetition (ek kam ko bar bar karna)

// 1. for
// 2. while
// 3. do...while
// 4. for...in
// 5. for...of

//! 1. For

// for(initialization;condition;incre/decre){
//     block of code;
// }

// for(var i = 1; i <= 3;i++){
//     console.log(i);
// }

//! Loop Advantage
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

//!  Straight 1 to 10
// for(var i = 1; i <= 10;i++){
//     console.log(i);
// }

//! Reverse 10 to 1
// for(var i = 10; i > 1; i--){
//     console.log(i);
// }

//! infinite
// for(var i = 1; i <=10;){
//     console.log("Hello World!");
// }

//! Even & Odd
// for(var i = 0; i <= 10; i += 2){
//     console.log(i);                  // Even
// }

// for (var i = 1; i <= 10; i += 2){
//     console.log(i);                  // Odd
// }

//! Loop + Array

//? Normal
// var fruits = ["Apple" , "Mango" , "Banana"];
// for(var i = 0; i < 3; i++){
//     console.log(fruits[i]);
// }

//? Advance
// var fruits = ["Apple" , "Mango" , "Banana"];
// for(var i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// var fruits = ["Apple" , "Mango" , "Banana"];
// for(var i = fruits.length - 1; i >= 0; i--){
//     console.log(fruits[i]);                      // Reverse
// }

//? Sum Normal

// var nums = [10 , 20 , 30];
// var sum = nums[0] + nums[1] + nums[2];
// console.log(sum);

//? Sum Advance
// var nums = [10 , 20 , 30];
// var sum = 0;
// for(var i = 0; i < nums.length; i++){
//     sum += nums[i];
// }
// console.log(sum)    // 60

//! Loop + Array + Conditions

//? Normal
// var userInput = prompt("Enter a City")
// var cleanestCities = ["Karachi" , "Islamabad" , "Lahore"];

// for(var i = 0; i < cleanestCities.length; i++){

//     if(userInput === cleanestCities[0]){
//         console.log("It's one of the cleanest cities");
//     }
//     if(userInput === cleanestCities[1]){
//         console.log("It's one of the cleanest cities");
//     }
//      if(userInput === cleanestCities[2]){
//         console.log("It's one of the cleanest cities");
//     }
//     else{
//         console.log("It's not on the list!");
//     }

// }

//? Advance
// var userInput = prompt("Enter a City")
// var cleanestCities = ["Karachi" , "Islamabad" , "Lahore"];

// for(var i = 0; i < cleanestCities.length; i++){

//     if(userInput === cleanestCities[i]){
//         console.log("It's one of the cleanest cities");
//     }
//     else{
//         console.log("It's not on the list!");
//     }

// }

//! Even & Odd
// for(var i = 1; i <= 20; i++){

//     if(i % 2 === 0){
//         console.log(i + " Even");
//     }
//     else if(i % 2 === 1){
//         console.log(i + " Odd")
//     }
// }

//! City Check

// var cityCheck = prompt("Enter a City Name");
// var cleanestCities = ["Karachi" , "Islam Abad" , "Rawalpindi"];

// if(cityCheck === cleanestCities[0] || cityCheck === cleanestCities[1] || cityCheck === cleanestCities[2]){
//     console.log("This is one of the Cleanest Cities!");
// }
// else{
//     console.log("It's not on the list!");
// }

//! City Check Advance
// var cityCheck = prompt("Enter a City Name");
// var cleanestCities = ["Karachi" , "Lahore" , "Multan"];
// var isFound = false

// for(var i = 0; i < cleanestCities.length; i++){

//     if(cityCheck === cleanestCities[i]){
//         isFound = true;
//         console.log("This is one of the Cleanest Cities!");
//         break;
//     }
    
// }

// if(isFound === false){
//     console.log("It's not on the list!");
// }

//! 5 Stars

// var star = "*"

// for(var i = 1; i <= 5; i++){
//     star = "";

//     for(var j = 1; j <= i; j++){
//         star += "*";
//     }
//     console.log(star);
// }

//! Table

// var num = prompt("Enter a number");
// var limit = prompt("How many times do you want to multiply");
// for(var i = 1; i <= limit; i++){
//     document.write(num + " x " + i + " = " + num * i + "<br />");
// }


//! Flag

// var cities = ["Karachi" , "Multan" , "Islamabad"];
// var cleanestCities = prompt("Enter a city Name")

// for(var i = 0; i < cities.length; i++){
    
//     var isFound = false;
//     if(cleanestCities === cities[i]){

//         isFound = true;
//         console.log("Found");
//         break;
//     }
// }

// if(!isFound){
//     console.log("Not Found");
// }



 