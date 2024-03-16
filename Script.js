let string="";
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((i)=>{
    i.addEventListener('click',(e)=>{
        let memory=0;
        if(e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector('input').value=string;
        }else if(e.target.innerHTML=='C'){
            string="";
            document.querySelector('input').value=string;
         }else if(e.target.innerHTML=='M+'){
            memory +=parseFloat(string);//add current value to memory
           string="";//reset the string
         }else if(e.target.innerHTML=='M-'){
            memory -=parseFloat(string);//Subtract current value from memory
           string="";//reset the string
         }else if(e.target.innerHTML=='MR'){
            string=memory.toString();//Set the string value stored in memory
           document.querySelector('input').value=string;//display the memory value in the input  field
         }  
         else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})