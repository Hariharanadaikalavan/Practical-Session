var itemList=[];
function addition()

{
    var itemList=document.getElementById("itemName").value;
    itemList.push(itemList);
    document.getElementById("itemName").value=" ";
    //console.log(itemList);
    document.getElementById("tbodyid").innerHTML="<tr><td>"+itemList+"<tr><td>";
}