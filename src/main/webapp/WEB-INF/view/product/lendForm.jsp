<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>물품 정보</title>
<link rel="stylesheet" href="css/product.css?ver=1.3">
</head>
<body>
<h2>물품 정보</h2>
<div class="division-line"></div>

<div class="table-container">
	<div class="btnArea">
		<button type="button" class="productAddList">목록</button>
	</div>

	<table class="tbl_type">
		<tr>
			<th>등록 번호</th>
			<th>품목명</th>
			<th>품목 번호</th>
			<th>등록일</th>
			<th>폐기 예정일</th>
			<th>보유 여부</th>
		</tr>
		<c:forEach var="product" items="${productInfo}">
			<c:set var="reg_no" value="${product.reg_no}" />
			<c:set var="pno" value="${product.pno}" />
			<c:set var="pname" value="${product.pname}" />
			<tr>
				<td>${product.reg_no}</td>
				<td>${product.pname}</td>
				<td>${product.pno}</td>
				<td>${product.reg_date}</td>
				<td>${product.due_date}</td>
				<td>
					<c:choose>
						<c:when test="${product.isLend == 0}">
							❌
						</c:when>
						<c:when test="${product.isLend == 1}">
							⭕
						</c:when>
					</c:choose>
				</td>
			</tr>
		</c:forEach>
	</table>
	<br>
	<input type="hidden" id="reg_no" name="reg_no" value="${reg_no}" readonly="true">
	<input type="hidden" id="pno" name="pno" value="${pno}" readonly="true">
	<input type="hidden" id="pname" name="pname" value="${pname}" readonly="true">

	<div class="selectContainer">
		<div class="selectBar">
			<input type="text" id="mno" name="mno" placeholder="사원 번호"><br>
			<button type="button" id="lendsubmit">반출 등록</button>
		</div>
	</div>
</div>
	<script>
		var rootPath = window.location.origin
	</script>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="${rootPath}/js/product.js"></script>
</body>
</html>