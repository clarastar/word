$(function(){
	$('#nav-bar-box').load('header.php');
});

//统一元素上绑定不同的事件 且作用函数基本一致  这里应该有更简单的写法吧 
/***网站主体  为每一个单词含义和图片绑定鼠标移入事件****/
$("#wordMain").on('mouseenter','a',function(){
		var n=$(this).attr('href');
		$(`.img-box [alt=${n}]`).css({transform:"scale(1.1,1.1)"});
});
$('#wordMain').on('mouseout','a',function(){
		var n=$(this).attr('href');
		$(`.img-box [alt=${n}]`).css({transform:"scale(1,1)"});
});

$('#wordMain').on('click','a',function(e){
		e.preventDefault();
});



/*** 页面发音****/
$('.glyphicon-volume-up').click(function(){
	$("#word-audio").play();
});



$('.img-box').on('mouseenter','img',function(){
		var m=$(this).attr('alt');
		$(this).css({borderWidth:'3px'});
	//$(`#wordMain [href=${m}]`).css({background:'#fff',color:'#ff9933'});
	$(`#wordMain [href=${m}]`).css({transform:"scale(1.1,1.1)"});
});

$('.img-box').on('mouseout','img',function(){
		var m=$(this).attr('alt');
		$(this).css({borderWidth:'1px'});
		$(`#wordMain [href=${m}]`).css({transform:"scale(1,1)"});
		//$(`#wordMain [href=${m}]`).css({background:'#ff9933',color:'#fff'});
});

if (window.matchMedia("(max-width: 768px)").matches) {
	$("#wordMain").addClass("nav-stacked");
	$(".img-container").addClass("align-left");
	//$(".h2").addClass("small");
	//$(".h3").addClass("small");
}

$(".save").click(function(e){
	e.preventDefault();
	if(this.press){
		return false;
	}
	this.press=true;
	var word=$(this).attr("href");
	$.post("url",word,function(obj){
		console.log(arguments);
		if(obj.code===0){ //验证成功
			$(this).css({backgroundColor:"#ddd"});
			$(this).html("已收藏");
			console.log("保存成功");
		}else {

		}
	});
});
