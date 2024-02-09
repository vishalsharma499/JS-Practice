// Immediately Invoked Function Expressions (IIFE) 
// IIFE-a function that is called immediately after it is defined and it is also helpful to clear the pollution of global scope
// IIFE function
(function chai(){ 
    //Named IIFE
    console.log("DB Connected");
}()); //; it is used to enf the IIFE functions

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')