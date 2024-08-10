const form=document.querySelector('form')

//const height=parseInt(document.querySelector('#height').value)  This will give empty values

form.addEventListener('submit',function(e){
e.preventDefault()  // this method will not submit form

const height=parseInt(document.querySelector('#height').value) // converted value to Int
const weight=parseInt(document.querySelector('#weight').value)  // .value will give value
const results=document.querySelector('#results')
const resultsguide=document.querySelector('#resultsguide')

if(height==='' || height<0 || isNaN(height)){
results.innerHTML='Please give Valid Height';
} 
else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML='Please give Valid weight';
    }
else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    //To show result
    results.innerHTML=`<span>${bmi}</span>`

    if(bmi<180.){
        resultsguide.innerHTML=`You are Underweight`
    }
    else if(bmi>18.6 && bmi<24.9){
        resultsguide.innerHTML=`You are normal weight`
    }
    else if(bmi>24.9){
        resultsguide.innerHTML=`Your are overweight`
    }
}

})

