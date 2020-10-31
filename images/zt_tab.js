// JavaScript Document

$(function(){
	$("dl.tbox dt span.label a[_for]").mouseover(function(){
		$(this).parents("span.label").children("a[_for]").removeClass("thisclass").parents("dl.tbox").children("dd").hide();
		$(this).addClass("thisclass").blur();
		$("#"+$(this).attr("_for")).show();
	});
	$("a[_for=uc_member]").mouseover();

	//查询不能为空
	$('#sefrom1').submit(function(){
		var txt=$('#ssnrs');
		if(txt.val()==''){
			alert('请输入 搜索的内容！');
			txt.focus();
			return false;
		}
	});

	$("#button").click(function(){
		var word=$('#word').val();
		if(word == ''){
			alert('请输入关键字.');
			$('#word').focus();
			return false;
		}else{
			window.open('http://zhidao.crhsi.com.cn/search?lm=2&word='+word);
		}
	});

	$("#form1").submit(function(){
		  var name=$("#name").val();
		  var licence=$('#licence').val();
		  if(name == '' && licence == ''){
			alert('请输入院校名称或是办学许可证号');
			$('#name').focus();
			return false;
		  }
	});
});

function nTabs(thisObj,Num){
	if(thisObj.className == "active")return;
	var tabObj = thisObj.parentNode.id;
	var tabList = document.getElementById(tabObj).getElementsByTagName("li");
	for(i=0; i <tabList.length; i++)
	{
	  if (i == Num)
	  {
	   thisObj.className = "active";
	      document.getElementById(tabObj+"_Content"+i).style.display = "block";
	  }else{
	   tabList[i].className = "normal";
	   document.getElementById(tabObj+"_Content"+i).style.display = "none";
	  }
	}
}
function show(n)
{
   for(i=1;i<=document.getElementById('ss').getElementsByTagName('li').length;i++)
   {
	   document.getElementById('s'+i).style.display="none";
	   document.getElementById('st'+i).className="";
   }
       document.getElementById('s'+n).style.display="block";
	   document.getElementById('st'+n).className="current";
}
