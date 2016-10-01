/***页面背景的动态****/
window.onscroll=function(){
    var y=-5*window.pageYOffset+"px";
    console.log("window滑动了！y:"+y);
    $("#header").animate({top:y},1);
    $(".main-bg-flower").animate({top:y},1);
};

$(function(){
    $('#nav-bar-box').load('header.php');
});
