
$(function(){
    $('#nav-bar-box').load('header.php');
});

/*
 TODO ����֤������
 TODO * ��Ԫ�ػ�ȡ����ʱ - ��ʾ������ʾ����
 TODO * ��Ԫ��ʧȥ����ʱ - ��ɱ�Ԫ�ص���֤
 TODO   * ��֤ʧ�� - ����ʧ�ܵ���Ϣ
 TODO   * ��֤�ɹ� - �����ɹ�����Ϣ
 TODO * class��˵��
 TODO   * ���غ���ʾ��class
 TODO     * .show - ��ʾ
 TODO     * .hide - ����
 TODO   * ��ʾ��ͬ�����class
 TODO     * .control-default - ��ʾ��Ϣ
 TODO     * .control-error - ������Ϣ
 TODO     * .control-success - �ɹ���Ϣ
 */
/**
 * TODO ��װһ��ר�����ڱ�2.0����֤�ĺ���
 * TODO * ����ͬ����²�ͬ������ - �����Ĳ���
 * TODO   * ����֤��Ԫ�ز�ͬ - elem
 * TODO   * ��֤Ԫ�ص���ʾԪ�ز�ͬ - elemTip
 * TODO   * ����֤Ԫ�ص�Ĭ����ʾ��ͬ - msg
 * TODO   * ��֤�����ʾ���� - elemText
 */

var username = document.getElementById("username");
var usernameTip = document.getElementById("usernameTip");


//TODO �󶨻�ȡ�����¼�
username.onfocus = function(){
    //TODO ��ʾ��ʾ��Ϣ
    usernameTip.className = "col-md-5 show control-default";
    usernameTip.innerHTML = "������8��16λ��Ӣ�Ļ�����.";
}


//TODO ��ʧȥ�����¼�
username.onblur = function(){
    if(username.validity.valid){
        //TODO ��ʾ������ȷ
        usernameTip.className = "col-md-5 show control-success";
        usernameTip.innerHTML = "�û���������ȷ";
    }else if(username.validity.valueMissing){
        //TODO ��ʾֵΪ��
        usernameTip.className = "col-md-5 show control-error";
        usernameTip.innerHTML = "�û�������Ϊ��";
    }else if(username.validity.patternMismatch){
        //TODO ��ʾ����ƥ��
        usernameTip.className = "col-md-5 show control-error";
        usernameTip.innerHTML = "�û������벻��ȷ";
    }
}


//TODO ����ı���֤
var password = document.getElementById("password");
var passwordTip = document.getElementById("passwordTip");
password.onfocus = function(){
    //TODO ��ʾ��ʾ��Ϣ
    passwordTip.className = "col-md-5 show control-default";
    passwordTip.innerHTML = "������6��12λ������.";
}
password.onblur = function(){
    if(password.validity.valid){
        passwordTip.className = "col-md-5 show control-success";
        passwordTip.innerHTML = "����������ȷ";
    }else if(password.validity.valueMissing){
        passwordTip.className = "col-md-5 show control-error";
        passwordTip.innerHTML = "���벻��Ϊ��";
    }else if(password.validity.patternMismatch){
        passwordTip.className = "col-md-5 show control-error";
        passwordTip.innerHTML = "�������벻��ȷ";
    }
}


var options = {
    elem : document.getElementById("password"),
    elemTip : document.getElementById("passwordTip"),
    msg : document.getElementById("passwordTip").innerHTML,
    elemText : "����"
}
validityForm(options);


/*
  TODO opions���� - ����֤�������ݵ���Ϣ
  TODO * �������� - Object
  TODO   {
  TODO       elem : ����֤��Ԫ��,
  TODO       elemTip : ����֤Ԫ�ص���ʾ��ǩ,
  TODO       msg : ����֤Ԫ�ص�Ĭ����ʾ��Ϣ,
  TODO       elemText : ����֤Ԫ�ص���������
  TODO   }
 */
function validityForm(options){
    //TODO ��ȡ���� - ��ʾ��ʾ����
    options.elem.onfocus = function(){
        options.elemTip.className = "col-md-5 show control-default";
        options.elemTip.innerHTML = options.msg;
    }
    //TODO ʧȥ���� - ��Ԫ����֤
    options.elem.onblur = function(){
        if(options.elem.validity.valid){
            options.elemTip.className = "col-md-5 show control-success";
            options.elemTip.innerHTML = options.elemText+"������ȷ.";
        }
        if(options.elem.required){
            if(options.elem.validity.valueMissing){
                options.elemTip.className = "col-md-5 show control-error";
                options.elemTip.innerHTML = options.elemText+"����Ϊ��";
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
