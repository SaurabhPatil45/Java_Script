// this keyword is used to refer current context

const user={
    name:"saur",
    age:45,
    welcomeMessage:function(){
        console.log(`welocme ${this.name} to the website`);  //this keyword give current context
        console.log(this);

    }

}
user.welcomeMessage()  //welocme saur to the website
// context of saur is stop here. 
user.name="sham"  // from this line this keyword use new contexr sham
user.welcomeMessage()   //welocme sham to the website
console.log(this);   // if we comment line no 15, 16 then line no 17 print {} 
// means in Node Enviroment this keyword refers to empty context

// In window environment if we print empty this then we get Window Object which is Global scope


function chai(){
    let user1="Ram"
    console.log(this.user1);
}
chai()  //undefined  so we cannot able to use this keyword inside function

// Arrow Function

const chai1=() => {

    let myName="saurabh"
    console.log(this.myName);  // undifined

}



const addThreeo=(...num)=>{
    return num + 1;

}
console.log(addThreeo(10,15,32));

const addTwo=(num1, num2)=>{
    return num1+num2

}
console.log(addTwo(10,20));         //30

// Implicit Return

const addZero=(num1,num2)=> num1+num2
//const addZero=(num1,num2)=> (num1+num2)   this is also correct 
console.log(addZero(5,4));   //9
// When we use { } then Return keyword is coumplasry


const obje=()=>({name:"Ram", age:20})
console.log(obje());  // { name: 'Ram', age: 20 } to reeturn object () is mandatory

