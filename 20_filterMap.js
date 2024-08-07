// if we store result of for each loop in variable and print taht then for each loop not return any value

const code=["Java","HTML","CSS"]

const value=code.forEach( (item)=>{

    return item;
} )
console.log(value);  // undefined


// Filter: for above scenario we use filter which return values and use callback function

const nums=[1,2,3,4,5,6,7,8];

const result=nums.filter((item)=>item>5)
console.log(result); //[ 6, 7, 8 ]


const re2=nums.filter((item)=>{
 return item>3
})
console.log(re2);  //[ 4, 5, 6, 7, 8 ]  It is  expliit return 
// when we use { } then rerurn keyword is compulsary

const val1=[10,20,30]
//console.log(typeof(val1));
const val2=[]

val1.forEach((item)=>{
    if(item>10){
        val2.push(item)
    }

})
console.log(val2); //[ 20, 30 ]

const book=[
    {title:"Book1",genre:"History",publich:1940},

    {title:"Book2",genre:"Science",publich:2001},

    {title:"Book3",genre:"Maths",publich:2024},

    {title:"Book4",genre:"Horror",publich:1950},

    {title:"Book5",genre:"Comedey",publich:1999},

    {title:"Book6",genre:"Fiction",publich:2000},
]

const userBooks= book.filter((item)=>item.genre=="History")
console.log(userBooks);   //[ { title: 'Book1', genre: 'History', publich: 1940 } ]

const userBooks2=book.filter((element)=>{
return element.publich>=1950 && element.genre==="Fiction"
})
console.log(userBooks2);  //[ { title: 'Book6', genre: 'Fiction', publich: 2000 } ]



// chaning: using two methods

const myNumbers=[1,2,3,4]
const newNum=myNumbers
.map((item)=>item*10)
.map((item)=>item+1)
.filter((item)=>item>=11)

console.log(newNum);   //[ 11, 21, 31, 41 ]


// reduce()
