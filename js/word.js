

/**导航栏的注册与登陆**/
btLogin.onclick=function(){
	$('#modalLogin').css({display:'block'});
}
btnLog.onclick=function(){
	$('#modalLogin').css({display:'none'});
}

btReg.onclick=function(){
	$('#modalRegister').css({display:'block'});
}
btnReg.onclick=function(){
	$('#modalRegister').css({display:'none'});
}





//统一元素上绑定不同的事件 且作用函数基本一致  这里应该有更简单的写法吧 
/***网站主体  为每一个单词含义和图片绑定鼠标移入事件****/
$('#wordMain').on('mouseenter','a',function(){
		$(this).css({background:'#fff',color:'#ff9933'});
		var n=$(this).attr('href');
		$(`.img-box [alt=${n}]`).css({filter:'drop-shadow(5px 6px 10px #ff9933)'});
});
$('#wordMain').on('mouseout','a',function(){
		$(this).css({background:'#ff9933',color:'#fff'});
		var n=$(this).attr('href');
		$(`.img-box [alt=${n}]`).css({filter:'none'});
});

$('#wordMain').on('click','a',function(e){
		e.preventDefault();
});



/*** 页面发音****/
$('.fa-volume-up').click(function(){
	interval.play();
	$('audio').hide();
});



$('.img-box').on('mouseenter','img',function(){
		var m=$(this).attr('alt');
		//$(this).css({filter:'drop-shadow(5px 6px 10px #ff9933)'}); 不起作用？？
		$(this).css({border:'3px solid #ff9933'});
		$(`#wordMain [href=${m}]`).css({background:'#fff',color:'#ff9933'});
});

$('.img-box').on('mouseout','img',function(){
		var m=$(this).attr('alt');
		//$(this).css({filter:'none'});
		$(this).css({border:'1px solid #ff9933'});
		$(`#wordMain [href=${m}]`).css({background:'#ff9933',color:'#fff'});
});

		


