// JavaScript Document

/*-- 加载启动 --*/
window.onload = function(){
	
	scrolling();
	/*
	//动态累加判断滚动块宽度
	var newsubwid=document.getElementById("xwjjscroll").getElementsByTagName("li");
	for(i=0;i<newsubwid.length;i++){subwidth=subwidth+6+newsubwid[i].offsetWidth;}
	document.getElementById("xwjjlist").style.width=subwidth+300+"px";
	*/
	
	
	rdgzscroll();
	rdbsscorll();
	zp_initSiteDiv();
	zp_initXxbstjDiv();
	initializeZp_taglist();
	initializeZp_taglist1();
	initializeGamw();
}

/*-- 标签切换 --*/
function changetag(ele,boxId){
	var alltitle = ele.parentNode.parentNode.getElementsByTagName("h3");
	for(var a=0;a<alltitle.length;a++){alltitle[a].className = "";}
	ele.parentNode.className = "tagtitleon";
	var alllist = ele.parentNode.parentNode.getElementsByTagName("div");
	for(var b=0;b<alllist.length;b++){alllist[b].style.display = "none";}
	document.getElementById(boxId+"list").style.display = "block";
}

/*-- 新闻聚焦滚动 --*/
var scrollcontrol;
var subwidth=1;
var leftposition=0;//初始位置

function stopscroll(){clearInterval(scrollcontrol);}
function scrolling(){scrollcontrol=setInterval("position()",300);}
function position(){
	if(leftposition<-subwidth){leftposition=430;}
	leftposition=leftposition-3;
	if(leftposition==0){leftposition=1}
	document.getElementById("xwjjlist").style.marginLeft=leftposition+"px";
}

/*-- 热点关注滚动 --*/
function rdgzscroll(){
	window.setInterval(function(){
		var thisNode = document.getElementById("rdgzscroll").getElementsByTagName("li")[0];
		var marginTop = 0;
		var onceMove = window.setInterval(function(){
			marginTop = marginTop-2;
			if(marginTop<=-22){
				window.clearInterval(onceMove);
				var oldNode = thisNode.cloneNode(true);
				document.getElementById("rdgzscroll").getElementsByTagName("ul")[0].removeChild(thisNode);
				oldNode.style.marginTop = "0px";
				document.getElementById("rdgzscroll").getElementsByTagName("ul")[0].appendChild(oldNode)
			}
			else{thisNode.style.marginTop = marginTop+"px";}
		},100);
	},7000);
}

/*-- 热点办事滚动 --*/
var rdbsscroll;
var rdbstop = 0;
var rdbsheight = 0;
var state = true;
function rdbsscorll(){
	if(document.getElementById("rdbslist") == null) return;
	rdbsheight = document.getElementById("rdbslist").offsetHeight;
	
	rdbsscroll = window.setInterval(function(){
		var thisNode = document.getElementById("rdbslist").getElementsByTagName("li")[0];
		rdbsheight = thisNode.offsetHeight;
		rdbstop = rdbstop -1;
		if(rdbstop<=-rdbsheight){
			rdbstop = 0;
			state = true;
			document.getElementById("rdbslist").removeChild(thisNode);
			
		}
		else{
			if(state){
				var oldNode = thisNode.cloneNode(true);
				oldNode.style.marginTop = "0px";
				document.getElementById("rdbslist").appendChild(oldNode);
			}
			state = false;
			thisNode.style.marginTop = rdbstop+"px";
		}
	},50);
}
function stoprdbs(){
	window.clearInterval(rdbsscroll)
}

function zp_initSiteDiv(){
	var topDiv = document.getElementById("zp_siteDiv_top");
	if(topDiv == null) return;
	var topLi = topDiv.getElementsByTagName("li"), middleUl = document.getElementById("zp_siteDiv_middle").getElementsByTagName("ul");
	
	for(var i = 0; i < topLi.length; i++)
	{
		var li = topLi[i], ul = middleUl[i];
		if(i == 0)
		{
			li.style.background = "url(/images/footerbg_tover.jpg)";
			li.style.color = "#FFFFFF";
			ul.style.display = "block"
		}
		else
		{
			li.style.backgroundColor = "";
			li.style.color = "#333333";
			ul.style.display = "none"
		}
		li.onmouseover = function(){
			var middleDiv = document.getElementById("zp_siteDiv_middle");
			if(middleDiv == null) return;
			var li_array1 = this.parentNode.getElementsByTagName("li"), p = -1;
			for(var i = 0; i < li_array1.length; i++)
			{
				var li1 = li_array1[i];
				if(li1 == this)
				{
					p = i;  
					li1.style.background = "url(/images/footerbg_tover.jpg)";
					li1.style.color = "#fff";
				}
				else
				{
					li1.style.backgroundImage = "";
					li1.style.color = "#333";
				}
			}
			var ul_array1 = middleDiv.getElementsByTagName("ul");
			for(var i = 0; i < ul_array1.length; i++)
			{
				var ul1 = ul_array1[i];
				i == p ? ul1.style.display = "block" : ul1.style.display = "none";
			}
		};
	}
}

function zp_initXxbstjDiv(){
	var d = document.getElementById("xxbstj");
	if(d == null) return;
	var ul = d.getElementsByTagName("ul");
	if(ul.length == 0) return;
	var topUl = ul[0];
	var li_array = topUl.getElementsByTagName("li");
	for(var i = 0; i < li_array.length; i++){
		var li = li_array[i];
		if(i == 0)
		{
			li.style.backgroundImage = "url(/10462/images/2013/home_20130930_36.jpg)";
			li.style.color = "#FFFFFF";
			ul[1].style.display = "block";
		}
		else
		{
			li.style.backgroundImage = "url(/10462/images/2013/home_20130930_37.jpg)";
			li.style.color = "#980903";
			ul[2].style.display = "none";
		}
		li.onmouseover = function(){
			var li_array, ul_array = document.getElementById("xxbstj").getElementsByTagName("ul");
			li_array = ul_array[0].getElementsByTagName("li");
			for(var i = 0; i < li_array.length; i++)
			{
				var li = li_array[i];
				if(li == this)
				{
					li.style.background = "url(/10462/images/2013/home_20130930_36.jpg) no-repeat left top";
					li.style.color = "#FFFFFF";
					ul_array[i + 1].style.display = "block";
				}
				else
				{
					li.style.background = "url(/10462/images/2013/home_20130930_37.jpg) no-repeat left top";
					li.style.color = "#980903";
					ul_array[i + 1].style.display = "none";
				}
			}
		}
	}
}

function initializeZp_taglist(){
	var d = document.getElementById("zp_taglist");
	if(d == null) return;
	
	var ul_array = d.getElementsByTagName("ul");
	if(ul_array == null || ul_array.length == 0) return;
	var ul = ul_array[0];
	var li_array = ul.getElementsByTagName("li");
	for(var i = 0; i < li_array.length; i++)
	{
		var li = li_array[i];
		var a = li.getElementsByTagName("a")[0];
		if(i == 0){
			li.style.backgroundImage = "url(/10462/wza/images/index_tagbox_title_bg1.jpg)";
			li.style.backgroundPosition = "left top";
			li.style.backgroundRepeat = "no-repeat";
			a.style.backgroundImage = "url(/10462/wza/images/index_tagbox_title_bg2.jpg)"
			a.style.backgroundPosition = "right top";
			a.style.backgroundRepeat = "no-repeat";
			a.style.fontWeight = "bolder";
			a.style.fontSize = "14px";
			a.style.color = "#FFFFFF";
			ul_array[i + 1].style.display = "block";
		}
		else{
			li.style.backgroundImage = "url()";
			a.style.backgroundImage = "url()"
			a.style.fontWeight = "normal";
			a.style.fontSize = "12px";
			a.style.color = "#af4801";
			ul_array[i + 1].style.display = "none";
		}
		
		li.onmouseover = function(){
			var li_array = this.parentNode.getElementsByTagName("li");
			var ul_array = this.parentNode.parentNode.getElementsByTagName("ul");
			for(var i = 0; i < li_array.length; i++){
				var li = li_array[i];
				var a = li.getElementsByTagName("a")[0];
				if(li == this){
					li.style.backgroundImage = "url(/10462/wza/images/index_tagbox_title_bg1.jpg)";
					li.style.backgroundPosition = "left top";
					li.style.backgroundRepeat = "no-repeat";
					a.style.backgroundImage = "url(/10462/wza/images/index_tagbox_title_bg2.jpg)"
					a.style.backgroundPosition = "right top";
					a.style.backgroundRepeat = "no-repeat";
					a.style.fontWeight = "bolder";
					a.style.fontSize = "14px";
					a.style.color = "#FFFFFF";
					ul_array[i + 1].style.display = "block";
				}
				else{
					li.style.backgroundImage = "url()";
					a.style.backgroundImage = "url()"
					a.style.fontWeight = "normal";
					a.style.color = "#af4801";
					a.style.fontSize = "12px";
					ul_array[i + 1].style.display = "none";
				}
			}
		}
	}
}


function initializeZp_taglist1(){
	var d = document.getElementById("zp_taglist1");
	if(d == null) return;
	
	var ul_array = d.getElementsByTagName("ul");
	if(ul_array == null || ul_array.length == 0) return;
	var ul = ul_array[0];
	var li_array = ul.getElementsByTagName("li");
	for(var i = 0; i < li_array.length; i++)
	{
		var li = li_array[i];
		var a = li.getElementsByTagName("a")[0];
		if(i == 0){
			li.style.backgroundImage = "url(/10462/wza/images/index_tagbox_title_bg1.jpg)";
			li.style.backgroundPosition = "left top";
			li.style.backgroundRepeat = "no-repeat";
			a.style.backgroundImage = "url(/10462/wza/images/index_tagbox_title_bg2.jpg)"
			a.style.backgroundPosition = "right top";
			a.style.backgroundRepeat = "no-repeat";
			a.style.fontWeight = "bolder";
			a.style.fontSize = "14px";
			a.style.color = "#FFFFFF";
			ul_array[i + 1].style.display = "block";
		}
		else{
			li.style.backgroundImage = "url()";
			a.style.backgroundImage = "url()"
			a.style.fontWeight = "normal";
			a.style.fontSize = "12px";
			a.style.color = "#af4801";
			ul_array[i + 1].style.display = "none";
		}
		
		li.onmouseover = function(){
			var li_array = this.parentNode.getElementsByTagName("li");
			var ul_array = this.parentNode.parentNode.getElementsByTagName("ul");
			for(var i = 0; i < li_array.length; i++){
				var li = li_array[i];
				var a = li.getElementsByTagName("a")[0];
				if(li == this){
					li.style.backgroundImage = "url(/10462/wza/images/index_tagbox_title_bg1.jpg)";
					li.style.backgroundPosition = "left top";
					li.style.backgroundRepeat = "no-repeat";
					a.style.backgroundImage = "url(/10462/wza/images/index_tagbox_title_bg2.jpg)"
					a.style.backgroundPosition = "right top";
					a.style.backgroundRepeat = "no-repeat";
					a.style.fontWeight = "bolder";
					a.style.fontSize = "14px";
					a.style.color = "#FFFFFF";
					ul_array[i + 1].style.display = "block";
				}
				else{
					li.style.backgroundImage = "url()";
					a.style.backgroundImage = "url()"
					a.style.fontWeight = "normal";
					a.style.color = "#af4801";
					a.style.fontSize = "12px";
					ul_array[i + 1].style.display = "none";
				}
			}
		}
	}
}


/*2014-01-07郑鹏添加	开始*/
function initializeGamw()	//政务微博切换初始化
{
	var typeSpan = document.getElementById("zwwbTypeSpan");
	if(typeSpan == null) return;
	
	var span_array = typeSpan.getElementsByTagName("span");
	
	if(span_array.length > 0)
	{
		for(var i = 0; i < span_array.length; i++)
		{
			var span = span_array[i];
			span.onmouseover = function(){
				var typeSpan = document.getElementById("zwwbTypeSpan");
				var contentSpan = document.getElementById("zwwbContentSpan");
				var typeSpan_array = typeSpan.getElementsByTagName("span");
				var contentUl_array = contentSpan.getElementsByTagName("ul");
				for(var i = 0; i < typeSpan_array.length; i++)
				{
					var span = typeSpan_array[i];
					var ul = contentUl_array[i];
					if(span == this) ul.style.display = "block";
					else ul.style.display = "none";
				}
			}
		}
	}
}
/*2014-01-07郑鹏添加	结束*/
	