
$(function(){
    $('#nav-bar-box').load('header.php');
});

/*
 TODO 表单验证的需求
 TODO * 表单元素获取焦点时 - 显示输入提示内容
 TODO * 表单元素失去焦点时 - 完成表单元素的验证
 TODO   * 验证失败 - 给出失败的信息
 TODO   * 验证成功 - 给出成功的信息
 TODO * class的说明
 TODO   * 隐藏和显示的class
 TODO     * .show - 显示
 TODO     * .hide - 隐藏
 TODO   * 表示不同含义的class
 TODO     * .control-default - 提示信息
 TODO     * .control-error - 错误信息
 TODO     * .control-success - 成功信息
 */
/**
 * TODO 封装一个专门用于表单2.0的验证的函数
 * TODO * 将不同请款下不同的内容 - 函数的参数
 * TODO   * 被验证的元素不同 - elem
 * TODO   * 验证元素的提示元素不同 - elemTip
 * TODO   * 被验证元素的默认提示不同 - msg
 * TODO   * 验证后的提示内容 - elemText
 */

var username = document.getElementById("username");
var usernameTip = document.getElementById("usernameTip");


//TODO 绑定获取焦点事件
username.onfocus = function(){
    //TODO 显示提示信息
    usernameTip.className = "col-md-5 show control-default";
    usernameTip.innerHTML = "请输入8至16位的英文或数字.";
}


//TODO 绑定失去焦点事件
username.onblur = function(){
    if(username.validity.valid){
        //TODO 表示输入正确
        usernameTip.className = "col-md-5 show control-success";
        usernameTip.innerHTML = "用户名输入正确";
    }else if(username.validity.valueMissing){
        //TODO 表示值为空
        usernameTip.className = "col-md-5 show control-error";
        usernameTip.innerHTML = "用户名不能为空";
    }else if(username.validity.patternMismatch){
        //TODO 表示正则不匹配
        usernameTip.className = "col-md-5 show control-error";
        usernameTip.innerHTML = "用户名输入不正确";
    }
}


//TODO 密码的表单验证
var password = document.getElementById("password");
var passwordTip = document.getElementById("passwordTip");
password.onfocus = function(){
    //TODO 显示提示信息
    passwordTip.className = "col-md-5 show control-default";
    passwordTip.innerHTML = "请输入6至12位的数字.";
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
        passwordTip.innerHTML = "密码输入不正确";
    }
}


var options = {
    elem : document.getElementById("password"),
    elemTip : document.getElementById("passwordTip"),
    msg : document.getElementById("passwordTip").innerHTML,
    elemText : "密码"
}
validityForm(options);


/*
  TODO opions参数 - 向验证函数传递的信息
  TODO * 参数类型 - Object
  TODO   {
  TODO       elem : 被验证的元素,
  TODO       elemTip : 被验证元素的提示标签,
  TODO       msg : 被验证元素的默认提示信息,
  TODO       elemText : 被验证元素的真正含义
  TODO   }
 */
function validityForm(options){
    //TODO 获取焦点 - 显示提示内容
    options.elem.onfocus = function(){
        options.elemTip.className = "col-md-5 show control-default";
        options.elemTip.innerHTML = options.msg;
    }
    //TODO 失去焦点 - 表单元素验证
    options.elem.onblur = function(){
        if(options.elem.validity.valid){
            options.elemTip.className = "col-md-5 show control-success";
            options.elemTip.innerHTML = options.elemText+"输入正确.";
        }
        if(options.elem.required){
            if(options.elem.validity.valueMissing){
                options.elemTip.className = "col-md-5 show control-error";
                options.elemTip.innerHTML = options.elemText+"不能为空";
            }
        }
    }
}

$( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    var data=$().serialize();
    $.post("123.php",function(data){
        console.log(data);
    });
});
