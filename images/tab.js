// JavaScript Document
function setTab5(name,cursel,n){ 
for(i=1;i<=n;i++){ 
var menu=document.getElementById(name+i); 
var con=document.getElementById("con_"+name+"_"+i); 
menu.className=i==cursel?"qzjyhover":""; 
con.style.display=i==cursel?"block":"none"; 
}

var bys=document.getElementById('con_five_1');
var sxs=document.getElementById('con_five_2');
var yx=document.getElementById('con_five_3');
var byssxsyx_more=document.getElementById('byssxsyx_more');
if(bys.style.display=='block')
{
	byssxsyx_more.href=bys_more;
}
else if(sxs.style.display=='block')
{
	byssxsyx_more.href=sxs_more;
}
else if(yx.style.display=='block')
{
	byssxsyx_more.href=yx_more;
}





}

function setTab6(name,cursel,n){ 
for(i=1;i<=n;i++){ 
var menu=document.getElementById(name+i); 
var con=document.getElementById("con_"+name+"_"+i); 
menu.className=i==cursel?"footerover":""; 
con.style.display=i==cursel?"block":"none"; 
} 
}
//}