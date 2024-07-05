let score="33"

console.log(typeof score);  //typeof is used by two ways
console.log(typeof(score));

let valueInNumber= Number(score)   // It is used to convert in umber
console.log(typeof valueInNumber);


//----------------------------------------------------------------------------

let a="a15b16"

let b=Number(a)
console.log(b);             //NaN (Not a Number)

//-------------------------------------------------------------------------

let c=null
let d=undefined

let e=Number(c)
console.log(e);//0
let f=Number(d)
console.log(f);//NaN


//"33" => 33
//"33abc" => NaN
//true =>1 ; false =>0

//----------------------------------------------------------------------------

let login=1
let booleanLogin=Boolean(login);
console.log(booleanLogin);           //true

//------------------------------------------------------------------------

let str=""
let st=Boolean(str)
console.log(st);                 //false

let str1="saur"
let sttr=Boolean(str1)
console.log(sttr);               //true

//true =>1
//false =>0
//"" => false
//"Ram" => true

//------------------------------------------------------------------------------
 let number=33

 let nm=String(number)
 console.log(nm);                    //33
 console.log(typeof nm);             // string
