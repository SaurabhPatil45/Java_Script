//On the way of keeping data in memory and accessing data, data is differentied in two types


//A] Primitive Datatype => They are call by value
// String, Number, Boolean, Null, Undefined, Symbol, BigInt


//Java Script is dynamically typed language because it is not mandatory to write datatype before declearing variable.


//B] Reference Type(Non Premetive Datatype)
// Array, Objects, Functions


// Symbol: It is used to represent unique values
const id=Symbol('123');
const newId=Symbol('123');
console.log(id===newId);        //false