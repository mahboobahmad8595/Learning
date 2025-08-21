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
// var city = "Karachi";  
// console.log(city);

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

// 1. Var
// var name = "Ali";
// var name = "Ahmed";  // Allowed (redeclaration)
// name = "Usman";      // Allowed (reinitialization)
// console.log(name);   // Output: Usman

// 2. Let
// let age = 20;
// let age = 25;        //  Error (redeclaration not allowed)
// age = 30;            //  Allowed (reinitialization)
// console.log(age);    //  Output: 30

// 3. Const
// const country = "Pakistan";
// country = "India";
// const country = "China";
// console.log(country); // Output: Pakistan
