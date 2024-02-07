const accountId=122445
let accountEmail="vishal@google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountstate // If you not declared the value in variable its show undefined
// accountId=3 not allowed because this variable is declerared by const the value of const does not reassign.
accountEmail="vis@gmail.com"
accountPassword="456789"
accountCity="Lucknow" // It is also possible in javascript but do not use it.
 console.log(accountId);
/*
Prefer not to use var
because of issue of block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])