// JavaScript Document
function setTab2(divid,className,containerid,displayid){
document.getElementById(divid).className= className;
var container = document.getElementById(containerid);
var children = container.children;

for(var i=0;i<children.length;i++) {
	var c = children[i];
	c.style.display='none';	
}
document.getElementById(displayid).style.display='block';


var edu=document.getElementById('con_three_1');
var tz=document.getElementById('con_three_2');
var more=document.getElementById('edutz_more');
if(edu.style.display=='block')
	{
		more.href=edu_more;
	}
else if(tz.style.display=='block')
	{
		more.href=tz_more;
	}


} 
function setTab4(divid,className,containerid,displayid){
document.getElementById(divid).className= className;
var container = document.getElementById(containerid);
var children = container.children;

for(var i=0;i<children.length;i++) {
	var c = children[i];
	c.style.display='none';	
}
document.getElementById(displayid).style.display='block';
}


function setTab3(divid,className,containerid,displayid){
document.getElementById(divid).className= className;
var container = document.getElementById(containerid);
var children = container.children;

for(var i=0;i<children.length;i++) {
	var c = children[i];
	c.style.display='none';	
}
document.getElementById(displayid).style.display='block';

var media=document.getElementById('con_four_1');
var policy=document.getElementById('con_four_2');
var mediaimport_more=document.getElementById('mediaimport_more');
if(media.style.display=='block')
{
	mediaimport_more.href=media_more;
}
else if(policy.style.display=='block')
{
	mediaimport_more.href=policy_more;
}


} 


function setTab7(divid,className,containerid,displayid){
	document.getElementById(divid).className= className;
	var container = document.getElementById(containerid);
	var children = container.children;

	for(var i=0;i<children.length;i++) {
		var c = children[i];
		c.style.display='none';	
	}
	document.getElementById(displayid).style.display='block';

	var Rst=document.getElementById('con_ten_1');
	var Back=document.getElementById('con_ten_2');
	var RstBack_more=document.getElementById('RstBack_more');
	if(Rst.style.display=='block')
	{
		RstBack_more.href=Rst_more;
	}
	else if(Back.style.display=='block')
	{
		RstBack_more.href=Back_more;
	}
	

	}





<!--
function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById("con_"+name+"_"+i);
  menu.className=i==cursel?"hover":"";
  con.style.display=i==cursel?"block":"none";
 }
}
//-->