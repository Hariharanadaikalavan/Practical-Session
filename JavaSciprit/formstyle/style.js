function PrintAll()
{
 var username=document.getElementById("firstName").value;
 var password=document.getElementById("lastNam").value;
  var validate=(username=="rsp" || password=="000")?"Sucessully login enjoy our service":"please check the user name and password respectively";
  alert(validate);
  // Print the empty character & Remove the value
  document.getElementById("firstName").value="";
  document.getElementById("lastNam").value="";
}
