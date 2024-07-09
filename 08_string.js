const name="Saurabh"
const age=22

//console.log(name + age + "Ok");      old school method

console.log(`Hello my name is ${name} and age is ${age}`);  //String Interpolation

//Second way of defining String
const gameName= new String ('BGMI')
console.log(gameName);

console.log(gameName[0]);                //h
console.log(gameName.__proto__);        //{}

console.log(gameName.length);   //8
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('G'));


const newName='saurabh-patil'

let a=newName.substring(0,5);
console.log(a);                          //saura

const b=gameName.slice(-5,4)
console.log(b);

const d="  ok "
const e=d.trim();
console.log(e);          // it is used for white spaces only

const url="https://sp.com/saurabh%20patil"
console.log(url.replace('%20','-'));

 