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