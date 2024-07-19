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


//Singelton Object
const tinderUser=new Object()

//Non singleton Object
const tUser={}


//object inside object

const mainuser={
    email:"dff@gmail.com",
     fullName:{
        userFullname:{
        firstName:"Saur",
        lastName:"patil"
        }
    }
}
console.log(mainuser.fullName.userFullname.firstName);


//Object Merging

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={obj1,obj2}
console.log(obj3);    //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4=Object.assign({}, obj1,obj2)  //we use {} as target and other objects as source
console.log(obj4);   //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5={...obj1, ...obj2}
console.log(obj5);     //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


console.log(Object.keys(obj1));  //[ '1', '2' ]
console.log(Object.values(obj1));//[ 'a', 'b' ]
// key and value method gives output in array format

console.log(Object.entries(obj1)); //[ [ '1', 'a' ], [ '2', 'b' ] ]
// entries convert every key value pair in individual object

console.log(obj1.hasOwnProperty('isLogged'));  //false