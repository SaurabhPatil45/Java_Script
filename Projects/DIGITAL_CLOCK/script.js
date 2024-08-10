const clock=document.getElementById('clock')

setInterval(function(){        // setInterval is important function

    let  date=new Date();
    clock.innerHTML=date.toLocaleTimeString()
},1000)

