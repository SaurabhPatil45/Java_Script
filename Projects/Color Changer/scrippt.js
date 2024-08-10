const buttons=document.querySelectorAll('.button')
//console.log(buttons); we get node list here on which we can use for each loop
const body=document.querySelector('body')

buttons.forEach(function(button){
console.log(button);
button.addEventListener('click',function(event){
console.log(event);
console.log(event.target);
if(event.target.id==='grey'){
    body.style.backgroundColor=event.target.id;
}
if(event.target.id==='white'){
    body.style.backgroundColor=event.target.id;
}
if(event.target.id==='blue'){
    body.style.backgroundColor=event.target.id;
}
if(event.target.id==='yellow'){
    body.style.backgroundColor=event.target.id;
}


})

})
