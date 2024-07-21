(function chai(){           // this named IIFE
    console.log("Ram");
})();   //RAM

// we need to use ; after complition of IIFE to complete the function other wise it will give error if we use tow IIFE back to back

// ()()   == syntax of Immeditely Invoking Function expression

// we use IIFE to get out of Pollutin of variable created by global scope

( ()=>{console.log("DB")})();  //DB        

((name)=>(console.log(`DB is connectee to ${name}`)))("Saurabh")  //DB is connectee to Saurabh

// when we use two IFFE bak to back then use ; after completion of One IIFE