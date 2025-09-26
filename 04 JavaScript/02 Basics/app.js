//! Basics
// 1. Varialbe Key Words 
// 2. Varialbe Name 
// 3. Data Type

//! Decleration & initialization

// 1. Declaration           Creating a variable and giving it a name.
// 2. Initialization        Giving a variable its first value.
// 3. Redeclaration         Creating the same variable again using its keyword.   Just allowed in var keyword
// 4. Reinitialization      Assigning a new value to a variable.

// Examples

//? 1. Declaration
// var num;  
// console.log(num);

//? 2. Initialization
// var age = 20;  
// console.log(age);

//? 3. Redeclaration
// var city = "Lahore";  
// var city = "Karachi";  *
// console.log(city);     // Karachi

//? 4. Reinitialization
// var name = "Ali";  
// name = "Ahmed";  
// console.log(name);

//! Syntax

// var a = 10;
// console.log(a);
// Note : input me variable name likhte hain. aur output me uski value show hoti he

//! Key Words For Create Variables

// 1. None of these
// 2. var
// 3. let
// 4. const

//! Difference 

//?  Keyword         Scope           Redeclare           Reinitalize
//   var             Function        Yes                 Yes
//   Let             Block           No                  Yes
//   Const           Block           No                  No

//? Examples 

//? 1. Var 
// var name = "mahboob";
// var name = "ahmad";
// name = "khan";
// console.log(name);        // khan

//? 2. Let
// let name = "mahboob";
// let name = "ahmad";       // Error: Dobara let keyword istemal nahi kar sakte
// name = "khan";
// console.log(name);        // khan

//? 3. Const
// const name = "mahboob";
// const name = "ahmad";     // Error : Dobara const keyword istemal nahi kar sakte
// name = "khan";            // Error : Value change nahi kar sakte
// console.log(name);        // mahboob

 
//! Scope
// 1. Function     var 
// 2. Block        let , const 


//? 1. Function Scope
// var check = true;
// if(check === true){
//    var name = "Mahboob";
//    console.log(name);
// }
// console.log(name);


//? 2. Block Scope
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


//! Rules of Write Variable Name

// Sirf letters, digits, $, _ allowed.    var @gmail = mahboob
// Number se start nahi kar sakte.        var 8username = mahboob 
// Case-sensitive hote hain.              var name = mahboob
// Spaces allowed nahi.                   var user name = mahboob
// JS keywords use nahi kar sakte (var)   var var = mahboob

//! Cases

// Hard Rule
// Case Sensitive   :   h = h , H = H
// Case Insensitive :   h = h , H

// Soft Rule
// Camel  Case : firstName    (Front-End)
// Snake  Case : first_name   (Back-End)
// Pascal Case : FirstName    (React)

//! Data

// 1. Primitive Data      : Single value , Complex nahi hota
// 2. Non-Primitive Data  : Multiples value , Complex hota hai

//! Primitive Data

// 1. String :      "Hello World" , 'Hello World' , `Hello World`
// 2. Number :      10 , +10 , -10 , 10.5                           //Integer & Decimal
// 3. boolean :     true / false
// 4. undefined :   var a; , var a = undefined
// 5. null :        null                                            //DT Of Null = (Object) Bug

// Examples
// var a = "Hello world"
// var b = 20;
// var c = true;
// var d = undefined;
// var e = null ;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);


//! String
// 1. Single Quotes         → 'Hello'
// 2. Double Quotes         → "Hello"
// 3. Backticks Quotes      → `Hello`


//! Number
// 1. Integer       → 5, -20, 100
// 2. Decimal       → 3.14, -0.5, 2.718
// 3. Positive      → 10, 25.7
// 4. Negative      → -5, -99.99
// 5. Zero          → 0
// 6. Infinity      → Infinity, -Infinity
// 7. NaN           → NaN                       // Not a Number
// 8. BigInt        → 12345678901234567890n

//! Mutafariqaat

// alert("Hello World!")

// var a = prompt("Enter Your Name");
// console.log(a);
// var b = prompt("Enter Your Name" , "Sir");
// console.log(b);