var input=document.getElementById('input1').innerHTML=Math.floor(Math.random()*100);
// document.getElementById('input1').value=input;
function display()
{
  var option;
  for(i=0;i<=input;i++)
  {
    option+='<option>'+i+'</option>'
}
  document.getElementById('select').innerHTML=option;
  alert(i);
}                                           