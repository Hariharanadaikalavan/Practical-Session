

function add()
{
    //to convert the string to interger we parseInt();
   var firstNum=parseInt (document.getElementById("callbyfirstNum").value);
  var secondNum=  parseInt (document.getElementById("secondNum").value);
    var total=firstNum+secondNum;
    document.getElementById("Result").innerHTML=firstNum+"+"+secondNum+"="+total;
}

