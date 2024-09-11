const buttons=document.querySelectorAll('.button')
//console.log(buttons);
const body = document.querySelector("body")

buttons.forEach( function(button){
    button.addEventListener('click',function(event){
       console.log(event);
       console.log(event.target);
       
       if(event.target.id === "blue"){
        body.style.backgroundColor = event.target.id
       }

       if(event.target.id === "red"){
        body.style.backgroundColor = event.target.id
       }

       if(event.target.id === "yellow"){
        body.style.backgroundColor = event.target.id
       }

       if(event.target.id === "green"){
        body.style.backgroundColor = event.target.id
       }
      
       
    })
});

