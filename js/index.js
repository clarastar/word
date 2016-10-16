/***页面背景的动态****/
window.onscroll=function(){
    var y=-5*window.pageYOffset+"px";
    $("#header").animate({top:y},1);
    $(".videoBg").animate({top:y},1);
};

$(function(){
    $('#nav-bar-box').load('header.php');
});
