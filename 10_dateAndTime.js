// Dates

let myDate=new Date();
console.log(myDate);        //2024-07-11T16:52:41.492Z
console.log(myDate.toString()); //Thu Jul 11 2024 16:53:19 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Mon Jul 15 2024
console.log(myDate.toLocaleString());  //7/15/2024, 2:33:14 PM

console.log(typeof myDate); //Object

let myCreatedDate=new Date(2023,0,23);
console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023

let myNewDate=new Date("2023-01-12")
console.log(myNewDate.toDateString());  //Thu Jan 12 2023


//In java script Month Start from 0


let myTimeStamp=Date.now()
console.log(myTimeStamp);      //1721054893279  It give vLUE IN millsecoond

console.log(myNewDate.getTime()); //1673481600000

//To convert in second

console.log(Math.floor(Date.now()/1000));  //1721055078 sec10

// We have aslo get methods.

myNewDate.toLocaleString('default',{
    weekday:"long"
})
console.log(myNewDate);  //Using this we can customize result


