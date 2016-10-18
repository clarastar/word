/***页面背景的动态****/
window.onscroll=function(){
    var y=-4*window.pageYOffset+"px";
    $("#header").animate({top:y},1);
    $(".videoBg").animate({top:y},1);
};

$(function(){
    $('#nav-bar-box').load('header.php');
});


$(".com-my-start a").mouseenter(function(){
    $(this).animate({
        backgroundColor: "#ff9933",
        color:"#fff;"
    }, 500 );
});
$(".com-my-start a").mouseleave(function(){
    $(this).animate({
        backgroundColor: "#ffe",
        color:"#ff9933;"
    }, 500 );
});
