function abc()
{
    var input1=document.getElementById("firstValue").value;
var input2=document.getElementById("secondValue").value;

var result=document.getElementById("result");

 var ch=parseInt(document.getElementById("choice")).value;
 

switch(ch)
{
    case 1:
       var add=input1+input2;
       result.innerHTML=add;
        break;
    
    case 2:
    var sub=input1-input2;
    result.innerHTML=sub;
        break;
        
    default:
      result.innerHTML="Invaild Function";    
}
}