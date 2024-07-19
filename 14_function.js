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
  