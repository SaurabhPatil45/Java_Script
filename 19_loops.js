//for of loop

const arr=[1,2,3,5,6]

for (const val of arr) {
    console.log(val);
}

const greetings="Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}


// Maps : key value pair which are unique and order not change

const map=new Map()
map.set("MH", "maharashtra")
map.set("MP", "Madhypradesh")

console.log(map);

for (const [key, value] of map) {     // IMP syntax
    console.log(key, ':-', value); 
    
}

// For Of loop with above new syntax is not work for Object


// For in loop :- It is mainly used to iterate objects

const myObject={
    js:"Java Script",
    cpp:"C++",
    rb:"Rubby"

}

for (const key in myObject) {
    
    console.log(`${key} shortuctn for language is ${myObject[key]}`);    
    
}

// for in loop for array

const language=["cpp","js","HTML"]
for (const key in language) {
    console.log(key);  // This will show key that is array index value bcz it is key for array
    console.log(language[key]);  // it will give value of array
}

// For in loop not work for map because Map is not iterable


// For Each Loop : for this loop call back function is used
// call back function not have any name
//call back function is automatically check the array using parameter defined in function

const coding=["js", "HTML","CSS","Java"]
const coding2=["js", "HTML","CSS","Java"]
const coding3=["js", "HTML","CSS","Java"]
const coding4=["js", "HTML","CSS","Java"]
coding.forEach(  function(item){
 console.log(item);
})

// Using arrow function
coding.forEach( (val)=>{
 console.log(val);
} )

// using already defined function

function printMe(item){
    console.log(item);

}

coding3.forEach(printMe)  // give only function reference

coding.forEach((item,index,arr)=>{
    console.log(item, index, arr);
})


// Object inside array  : It is very Important

const mycoding=[
    {
        languageName:"java",
        fileName:"java"
    },
    {
        languageName:"Python",
        fileName:"py"
    }
]

mycoding.forEach( (item)=>{
 console.log(item.languageName);
})







