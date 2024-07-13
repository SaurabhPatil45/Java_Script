const score=300
console.log(score);  //300

const balance=new Number(100)
console.log(balance);           //[Number: 100]

console.log(balance.toString());           //100
console.log(balance.toString().length);    //3
console.log(balance.toFixed(2));           //100.00


const otherNumber=112.8697
console.log(otherNumber.toPrecision(4));  //122.9


const hund=1000000
console.log(hund.toLocaleString());    //1,000,000
console.log(hund.toLocaleString('en-IN'))  //10,00,000


//**************** MATH ************************************************/


console.log(Math.abs(-4));     //4

console.log(Math.round(4.5)); //5
console.log(Math.floor(4.5));  //4
console.log(Math.ceil(4.5));         //5


console.log(Math.random()); // It always give different between 0 and 1

console.log((Math.random()*10)+1);   // we use +1 to avoid values like 0.0452
console.log(Math.floor(Math.random()*10)+1);  // floor is used to get value without decimal

const min=10;
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);  n //IMP