<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" href="css/main.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
	href="https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Nanum+Pen+Script&family=Noto+Sans+KR:wght@200&display=swap"
	rel="stylesheet">
</head>
<style>
.joinmenu,
.productmenu{
	color: grey;;
}
#board{
	color:white;
}
.hidden1,
.hidden2 {
    display: none;
    
}
#toggleIcon1,
#toggleIcon2 {
            float: right; /* 아이콘을 오른쪽으로 이동시킵니다. */
        }
</style>
<body>
	<link rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
		integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
		crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js"
		integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n"
		crossorigin="anonymous"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"
		integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb"
		crossorigin="anonymous"></script>
	<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"
		integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn"
		crossorigin="anonymous"></script>

	<nav>
		<div class="header">MENU</div>
		<ul>
			
				<li id = "board">건의 하기</li>
			
			<c:if test="${memberInfo.deptno == 1}">
				<li class="menu-item1">
				  사원&nbsp<span id="toggleIcon1">▶</span></li>
					<li class="joinmenu hidden1" id="joinForm"> ≫ 사원 등록</li>
					<li class="joinmenu hidden1" id="memberList"> ≫ 사원 관리</li>
				<li class="menu-item2">자원
				<span id="toggleIcon2">▶</span></li>
					<li class="productmenu hidden2" id="product">≫ 자원 관리</li>
					<li class="productmenu hidden2" id="productAddBtn">≫ 자원 등록</li>
					<li class="productmenu hidden2" id="lendList">≫ 반출 현황</li>

			</c:if>
		</ul>
	</nav>
	<main class="container-fluid toggled">
		<div class="header">
			<div class="menu-box">
				<span style="font-size: 40px;">👤</span>
				<span class="logo">${memberInfo.name}님, 환영합니다.</br>
				<a href="logout" id="logout">❌로그아웃</a></span>
			</div>

		</div>
		<div class="main-content">
			<!-- Wrap the main content in a div -->
			<div class="mainView">
				<div class="image-container">
					<img src="images/main.png" alt="main_image">
				</div>
			</div>
		</div>

	</main>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="js/main.js"></script>
</body>
</html>