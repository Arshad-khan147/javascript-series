// immedately invoked function expression
// Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.
// (function car(){
//     console.log("hello this is the car");
// })();

// ((name) => {
//     console.log(`Name of the canidate ${name}`)
// })("arshad khan")

console.log(this); // in case of node the value of this key word is empty object but the condition is that if you print in the console than it will give an empty object

function Add(){
    // let name = "arshad";
    // console.log(this.name);
    console.log(this); // in case this will give something to me 
}
Add();

// this keyword refers to the current object 
// This is not how it works in Node. In Node.js all modules (script files) are executed in their own closure while browsers execute all script files directly within the global scope.