//singleton : when we make objects using Constructor
//object.create()
// When we make objects as literal then we not get singleto object

//Objects literals
const user={
    name:"Ram",
    "sirName":"Patil",
    age:21,
    location:"Pune",
    Email:"s@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]

}

console.log(user.name);
console.log(user["name"]);  // we use this format due to case no 2 i.e "sirName"
console.log(user.sirName);
 


// How to use symbol as key in objects

const mySym=Symbol("key1")

const obj={
    animal:"Lion",
    [mySym]:"myKey1"
}
console.log(obj[mySym]);  //myKey1

//change value of object
user.age=30;

//To freez object
//Object.freeze(user)   //after freez we can not able to update object


// Use of functions in Object

user.greet=function(){
    console.log("Hello users");
}
console.log(user.greet());  //Hello users
console.log(user.greet);   //[Function (anonymous)]

user.greetTwo=function(){
    console.log(`Hello users ${this.name}`);
}

console.log(user.greetTwo());   //Hello users Ram