<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>productForm</title>
<link rel="stylesheet" href="css/product.css?ver=1.3">
</head>
<body>
<h2>자원 등록</h2>
<div class="division-line"></div>
<br>
<div class="container">
    <ul class="regFormList">
        <li>
            <select id="pno">
                <option value="">등록할 품목명 선택</option>
                <!-- productList를 이용하여 옵션을 동적으로 생성 -->
                <c:forEach items="${productList}" var="product">
                    <option value="${product.pno}">${product.pname}</option>
                </c:forEach>
            </select>
        </li>
        <li>
            <input type="text" id="reg_quantity" class="reg_quantity" placeholder="등록할 수량 입력">
        </li>
        <button onclick="submitBtn()">등록</button>
    </ul>
</div>
<script>   var rootPath = window.location.origin</script>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="${rootPath}/js/product.js"></script>
</body>
</html>