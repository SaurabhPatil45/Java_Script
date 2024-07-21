function sayName(){
    console.log("my Name");
}

sayName // This is only reference of function
sayName();

function addNumber(number1,number2){  //this is parameters
   console.log( number1+number2);

}
addNumber()  //NaN
addNumber(4,8)  //12  it is arguments

const result=addNumber(10,5)
console.log(result);            //undefined


function addNumber1(number1,number2){  //this is parameters
//    let result=number1+number2
//    return result                // after return no command execute
     return number1+number2
 }
 const res=addNumber1(10,15)
 console.log(res);                //25


 function loggedIn(username){
    if(username===undefined){
        console.log("please enter user name fuker");
        return   // we used return bcz if this condition is stisfied then other block will not execute

    }
    return `${username} just logged in`
 }

 console.log(loggedIn("Ram"));    //Ram just logged in
 console.log(loggedIn());



 // how to give default value to funcction

 function subs(myName = "Sham"){   // By using this we give default value to function
    return `${myName} is loggin`
 }
 console.log(subs());  //Sham is loggin



 // how to use multiple parameters which are not konw

 function calculateCartPrice(...num1){   //... is callled rest operator and it is also called spared operator
      return num1
 }
 console.log(calculateCartPrice(200,400,600));  //[ 200, 400, 600 ]


 function calculateCartPrice1(val1, val2,...num1){   //... is callled rest operator and it is also called spared operator
   return num1
}
console.log(calculateCartPrice1(200,400,600));  //[ 600 ]
  


// functions and objects

const user={
  userName:"saurabh",
  age:20
}
 function handleObject(anyObject){
   console.log(`Username is ${anyObject.userName} and age is ${anyObject.age}`);

 }
 handleObject(user)  //Username is saurabh and age is 20
 handleObject({
   userName:"Ram",
   age:20
 })                 //Username is Ram and age is 20  {we acn also pass object directly}



 // Array and Objects

 const array=[10,20,30,40]
 function getArray(anyArray){
   return anyArray[1]

 }
 console.log(getArray(array));   //20
 console.log(getArray([99,98,97]));  //98