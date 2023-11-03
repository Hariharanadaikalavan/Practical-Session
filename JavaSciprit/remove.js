var items=document.querySelectorAll("#list li");
tab=[],liIndex;

for (var i=0;i<items.length;i++)
{
    tab.push(items[i].innerHTML)
}

for(var i=0;i<items.length;i++)
{
items[i].onclick=function()
{
    liIndex=tab.indexof();
    console.log(this.innerHTML+"INDEX= "+liIndex)
}
}