<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
	<title>用户登录界面</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="renderer" content="webkit">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<!-- 引入bootstrap -->
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/bootstrap.min.css">
	<!-- 引入JQuery  bootstrap.js-->
	<script src="<%=request.getContextPath()%>/js/jquery-3.2.1.min.js"></script>
	<script src="<%=request.getContextPath()%>/js/bootstrap.min.js"></script>
	<script src="<%=request.getContextPath()%>/js/jquery.validate.min.js"></script>
	<script type="text/javascript">
		$(function(){
			$("#username1").blur(function(){
				$("#names").empty();
				var name = $(this).val();
				if(name=="" || name==null){
					$("#username1").after("<span id='names' style='color: red'>用户名不能为空</span>");
				}
			});
			$("#repassword").blur(function () {
				$("#checkpassword").empty();
				if($("#repassword").val()!=$("#registpassword").val()){
					$("#repassword").after("<span id='checkpassword' style='color:red'>两次输入的密码不一致</span>");
				}
			})
		})
	</script>
	<style type="text/css">
	body{
	   background: url(<%=request.getContextPath()%>/images/1.jpg)repeat;
	}
	#login-box {
		/*border:1px solid #F00;*/
		padding: 35px;
		border-radius:15px;
		background: #56666B;
		color: #fff;
	}
	</style>
</head>
<body>
	<div class="container" id="top">
		<div class="row" style="margin-top: 280px; ">
			<div class="col-md-4"></div>
			<div class="col-md-4" id="login-box">
				<form class="form-horizontal" role="form" action="<%=request.getContextPath()%>/login" id="form1" method="post">
				  <div class="form-group">
				    <label for="userID" class="col-sm-3 control-label">用户id</label>
				    <div class="col-sm-9">
				      <input type="text" class="form-control" id="userID" placeholder="请输入名字" name="username">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="password" class="col-sm-3 control-label">密码</label>
				    <div class="col-sm-9">
				      <input type="password" class="form-control" id="password" placeholder="请输入密码" name="password">
				    </div>
				  </div>
					<div class="form-group pull-right" style="margin-right: 30px;">
						<div class="col-sm-offset-2 col-sm-10">
							<%--onclick="window.location.href='/user/regist'"--%>
							<button type="button" class="btn btn-default btn-info" data-target="#register" data-toggle="modal">注册</button>
						</div>
					</div>
					  <div class="form-group pull-right" style="margin-right: 20px;">
						<div class="col-sm-offset-2 col-sm-10">
						  <button type="submit" class="btn btn-default btn-info" >登录</button>
						</div>
					  </div>
				</form>
			</div>
			<div class="col-md-4"></div>
		</div>		
	</div>
	<!-- 注册窗口 -->
	<div id="register" class="modal fade" tabindex="-1">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-body">
					<button class="close" data-dismiss="modal">
						<span>&times;</span>
					</button>
				</div>
				<div class="modal-title">
					<h1 class="text-center">注册</h1>
				</div>
				<div class="modal-body">
					<form class="form-group"  action="${pageContext.request.contextPath}/user/doRegist" id="registForm" method="post">
						<div class="form-group">
							<label for="username1">用户名</label>
							<input class="form-control" type="text"  placeholder="请输入用户名" name="username" id="username1" >
							<span id="msg"></span>
						</div>
						<div class="form-group">
							<label>密码</label>
							<input class="form-control" type="password" placeholder="请输入密码" name="password" id="registpassword">
						</div>
						<div class="form-group">
							<label>再次输入密码</label>
							<input class="form-control" type="password" placeholder="请再次输入密码" name="repassword" id="repassword" onblur="check()">
						</div>
						<div class="text-right">
							<button class="btn btn-primary" type="submit" id="regist">提交</button>
							<button class="btn btn-danger" data-dismiss="modal">取消</button>
						</div>
						<a href="" data-toggle="modal" data-dismiss="modal" data-target="#login">已有账号？点我登录</a>
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
</html>