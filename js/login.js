


/**导航栏的注册与登陆**/
$(document.body).on("click","#btLogin",function(){
    $('#modalLogin').css({display:'block'});
});

var loginName = null; //当前登录的用户名
$('#btnLog').click(function(){
    //把用户的输入序列化为k=v字符串
    var data = $('#login-form').serialize();
    //$.ajax  $.post
    $.get('data/1_login.php', data, function(obj){
        //console.log('开始处理登录验证结果');
        console.log(arguments);
        if(obj.code===1000){ //验证成功
            $('#modalLogin').fadeOut();  //摸态框淡出
            loginName = $('[name="uname"]').val();
            $('#btLogin').html('欢迎回来：'+loginName);
        }else {
            $('#modalLogin .alert').html(obj.msg);
        }
    });
});

