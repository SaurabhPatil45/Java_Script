// JS array are resizeable, and of multiple datatypes

// Array Declearation

const myArr=[1,2,3,4];
const myArr2=new Array(5,8,7,9)

//Use of array
console.log(myArr[2]);


//Array Methods
myArr.push(6)
myArr.push(7)        // It add the value in array in last index
console.log(myArr);   //[ 1, 2, 3, 4, 6, 7 ]

myArr.pop();          // It remove last element from array
console.log(myArr);   //[ 1, 2, 3, 4, 6 ]

myArr.unshift(9); 
myArr.unshift(-5)    // It add the element at starting of array.
console.log(myArr);   //[-5,  9, 1, 2, 3, 4, 6 ]

myArr.shift();
console.log(myArr);    // It remove first element

console.log(myArr.includes(11));  //false
console.log(myArr.indexOf(15));   //-1


const newArr=myArr.join();
console.log(myArr);              //[ 9, 1, 2, 3, 4, 6 ]
console.log(newArr);            //9,1,2,3,4,6
console.log(typeof(newArr));    //String
//joing convert Array into String


//Slice and Splice

console.log("A", myArr)          //A [ 9, 1, 2, 3, 4, 6 ]
const mnA1=myArr.slice(1,3)     /// It doesnot select last element
console.log(mnA1);              //[ 1, 2 ]

console.log("B", myArr );       //B [ 9, 1, 2, 3, 4, 6 ]
const mnA2=myArr.splice(1,3)    // It removes selected part from Original Array
console.log("C", myArr);        //C [ 9, 4, 6 ]
console.log(mnA2);             //[ 1, 2, 3 ]



const a=[1,2,8,4]
const b=[10,11,12,13]
a.push(b)
console.log(a);            //[ 1, 2, 8, 4, [ 10, 11, 12, 13 ] ]

const c=a.concat(b)
console.log(c);           //[ 1, 2, 8, 4, [ 10, 11, 12, 13 ], 10, 11, 12, 13 ]

//Spread Operator
const d=[...a,...b]
console.log(d);  


//flat()

let another_Array=[1,2,3,[-1,-2,-3],[1,2,[1,5,4[7,8,10]]]]
const reel_Array=another_Array.flat(Infinity)
console.log(reel_Array); //[ 1, 2, 3, -1, -2, -3, 1, 2, 1, 5, undefined ]


// To check weather given element is Array or not and to convert it into Array
console.log(Array.isArray("Saurabh"));   //false
console.log(Array.from("Saurabh"));  


let s1=10;
let s2=20;
let s3=30;
console.log(Array.of(s1,s2,s3));    //[ 10, 20, 30 ]