// var has global scope so we not use it

var a=100
if(true){
    var a=30;

}
console.log(a);  //30


// let and const has block scope

let b=15;
if(true){
    let b=50;
    console.log(`inner: ${b}`);  //inner: 50
}
console.log(`Outer : ${b}`);  //Outer : 15



// Nested Scope

function  one() {
    
    const userName="Saurabh"
    
    function two(){
        const website="Youtube"
        console.log(userName);
    }
   // console.log(website);  this statement will give error because website has block scope
    //two()               // Saurabh
} 
one()  // if we comment two() and execute then nothing will print bez two function is not called

// Iceream Example
// For nested function: child functions can able to access Parent variables


// what is expressioon and function

//function
//add() this will not give any error
function add(num){
 return num+1;
}
add(10); // here we can decleare add() above function

// Expression
//addTwo(20)  this will hive error in case of expression
const addTwo=function(num1){
    return num1+2;
}
addTwo(10)  // we cannot decleare addTwo() above function