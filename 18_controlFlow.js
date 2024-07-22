const temp=50;
if(temp!=51){
 console.log("Correct");
}

// Truthy and Falsy value

//falsy value: False, 0, -0, BigInt 0n, "", null, undefined, NaN

const name=0;
if(name){
    console.log("Yes");
}
else{
    console.log("no");      //no  bcz zero is falsy vlue
}


// Truthy value: "0" zero in String , 'false', " ", [], {}, function(){}


// How to check empty Object

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("empty Object");

}


// How to check emty Array
const emptyArray=[]

if(emptyArray.length===0){
    console.log("empty array");

}


// Nullish Coalescing Operator (??)  : null undefined

let val1=5 ?? 10
console.log(val1);  //5

let val2=null ?? 15
console.log(val2);  //15

let vl3=undefined ?? 15
console.log(vl3);   //15



// Terniary Operator

// condition ? true : false

const iceTeap=100
iceTeap>=80 ?console.log("Less than 80"):console.log("More than 80");
