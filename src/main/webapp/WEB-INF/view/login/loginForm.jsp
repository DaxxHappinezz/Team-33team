<%@ page contentType="text/html; charset=utf-8" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<html>
<head>
    <title><spring:message code="login.title" /></title>
</head>
<link rel="stylesheet" href="css/login.css?ver=1.3">
<body>

    <div class="wrapper">
    	<div class="container">
    	
    	<div class="login"><strong>LogIn</strong></div>
    
    <div class="login-form">
    <p>
        <label>
        <input type="text" name="mno" placeholder="사번을 입력하세요" class="input" />
        </label>
    </p>
    <p>
        <label>
        <input type="password" name="password" class="input" placeholder="비밀번호를 입력하세요"/>
        </label>
    </p>
    <p>
    <div id="wrongIdPassword" class="errorText"></div>
    </p>

    <button class="btn" id="login"><strong>로그인</strong></button>
    	</div>
    	</div>
    </div>
    <script>   var rootPath = window.location.origin</script>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="${rootPath}/js/login.js"></script>
</body>
</html>
