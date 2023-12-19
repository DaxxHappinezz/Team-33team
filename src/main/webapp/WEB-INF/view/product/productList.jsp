<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>물품 목록</title>
</head>
<body>
<button type="button" class="productAddBtn" onclick="location.href='<c:url value="/product/insert"/>'">물품 등록</button>
<table>
    <tr>
        <th>번호</th>
        <th>품목명</th>
        <th>총 보유량</th>
        <th>현재 보유량</th>
    </tr>
    <c:forEach var="product" items="${productList}">
    <tr>
        <td>${product.pno}</td>
        <td>${product.pname}</td>
    </tr>
    </c:forEach>
</table>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="js/product.js"></script>
</body>
</html>