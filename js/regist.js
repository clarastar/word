
$(function(){
    $('#nav-bar-box').load('header.php');
})

var username = document.getElementById("username");
var usernameTip = document.getElementById("usernameTip");

username.onfocus = function(){
    usernameTip.className = "col-md-5 show control-default";
    usernameTip.innerHTML = "请输入8至16位的英文数字";
}

username.onblur = function(){
    if(username.validity.valid){
        usernameTip.className = "col-md-5 show control-success";
        usernameTip.innerHTML = "用户名输入正确";
    }else if(username.validity.valueMissing){
        usernameTip.className = "col-md-5 show control-error";
        usernameTip.innerHTML = "用户名不能为空";
    }else if(username.validity.patternMismatch){
        usernameTip.className = "col-md-5 show control-error";
        usernameTip.innerHTML = "用户名格式不正确";
    }
}

var password = document.getElementById("password");
var passwordTip = document.getElementById("passwordTip");
password.onfocus = function(){
    passwordTip.className = "col-md-5 show control-default";
    passwordTip.innerHTML = "请输入6至12位数字";
}
password.onblur = function(){
    if(password.validity.valid){
        passwordTip.className = "col-md-5 show control-success";
        passwordTip.innerHTML = "密码输入正确";
    }else if(password.validity.valueMissing){
        passwordTip.className = "col-md-5 show control-error";
        passwordTip.innerHTML = "密码不能为空";
    }else if(password.validity.patternMismatch){
        passwordTip.className = "col-md-5 show control-error";
        passwordTip.innerHTML = "密码格式不正确";
    }
}

$( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    var registInfo=$(this).serialize();
    window.location.href="main.html";

    $.post("#url",registInfo,function(data){
        console.log(data);
    });
});