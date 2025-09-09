//! Decleration & initialization

// 1. Declaration           Creating a variable and giving it a name.
// 2. Initialization        Giving a variable its first value.
// 3. Redeclaration         Creating the same variable again using its keyword.   Just allowed in var keyword
// 4. Reinitialization      Assigning a new value to a variable.

// Examples

// 1. Declaration
// var num;  
// console.log(num);

// 2. Initialization
// var age = 20;  
// console.log(age);

// 3. Redeclaration
// var city = "Lahore";  
// var city = "Karachi";  *
// console.log(city);     // Karachi

// 4. Reinitialization
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

