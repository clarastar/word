<?php
header('Content-Type: text/html;charset=UTF-8');
?>

    <ul class="nav-bar">
        <li><a href="#">Com背词</a></li>
        <li><a href="#">我的收藏</a></li>
        <li><a href="#">单词游戏</a></li>
        <li><a href="#" id="btLogin">登陆</a>
            <div class="modal" id="modalLogin">
                <div class="modal-dialog">
                    <div class='modal-content'>
                        <h3>你好，欢迎登陆！</h3>
                        <span>用户名：</span><input id="uname" placeholder="请输入用户名"><br>
                        <span>密码：</span><input id="upwd" placeholder="请输入密码"><br>
                        <button class='btnLog' id="btnLog">登陆</button>
                    </div>
                </div>
            </div>
        </li>
        <li><a href="#" id="btReg">注册</a>
            <div class="modal" id="modalRegister">
                <div class="modal-dialog">
                    <div class='modal-content'>
                        <form action="#">
                            <h3>你好，欢迎注册！</h3>
                            <span>用户名：</span>
                            <input id="uname" placeholder="请输入用户名"><br>

                            <span>密码：</span>
                            <input type="password"id="upwd" placeholder="请输入密码"><br>

                            <span>密码：</span>
                            <input type="password" autofocus id="upwd" placeholder="请再次输入密码"><br>

                            <span>邮箱：</span>
                            <input type="email"><br>

                            <button type="submit" class='btnReg'id="btnReg">注册</button>

                        </form>

                    </div>
                </div>
            </div>
        </li>
    </ul>