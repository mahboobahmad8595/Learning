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
//     console.log(sum);
// }