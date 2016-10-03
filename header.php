<?php
header('Content-Type: text/html;charset=UTF-8');
?>

    <ul class="nav-bar">
        <li><a href="#">Com背词</a></li>
        <li><a href="#">我的收藏</a></li>
        <li><a href="#">单词游戏</a></li>
        <li><a href="#" id="btLogin">登陆</a>
        </li>
        <li><a href="regist.html" id="btReg">注册</a>

        </li>
    </ul>

            <div class="modal" id="modalLogin">
                <div class="modal-dialog">
                    <div class='modal-content'>
                            <h4>你好，欢迎登陆！</h4>
                        <form id="login-form" action="#">
                            <div class="form-group">
                                <label class="col-md-2 control-label" for="username">用户名:</label>
                                <div class="col-md-5">
                                <input id="username" name="uname" class="form-control" autofocus placeholder="请输入用户名">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-2 control-label" for="password">密码:</label>
                                <div class="col-md-5">
                                <input id="password" name="upwd" type="password" class="form-control" placeholder="请输入密码">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-2 control-label"></label>
                                <div class="col-md-5">
                                    <input id="btnLog" type="submit" value="提交" class="btn btn-success btn-block">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
