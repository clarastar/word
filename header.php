<?php
header('Content-Type: text/html;charset=UTF-8');
?>
<div class="navbar" >
				<div class="container">
					<div class="navbar-header">
						<a class="navbar-brand" href="main.html">
							<img src="img/comword-no-bg.png" >
						</a>
						<a class="navbar-toggle icon-bar-box" id="icon-bar-box" data-toggle="collapse" href="#menu">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</a>
					</div>
					<div id="menu" class="navbar-collapse collapse">
						<ul class="nav navbar-nav nav-bar">
							<li><a href="save.html"><img class="img-responsive" src="img/mysave.png"></a></li>
							<li><a href="test.html"><img class="img-responsive" src="img/wordgame.png"></a></li>
						</ul>
						<div class="form-group navbar-right">
								<label class="sr-only" for="login">登录</label>
								<a id="login" class="navbar-link navbar-text navbar-right" data-toggle="modal" href="#modalLogin">
								<img class="img-responsive" src="img/login.png"></a>
								<label class="sr-only" for="regist">注册</label>
								<a href="regist.html" id="regist" class="navbar-link navbar-text navbar-right" >
								<img class="img-responsive" src="img/regist.png"></a>
						</div>
					</div>
				</div>
</div>

