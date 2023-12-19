<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>물품 등록 목록</title>
<link rel="stylesheet" href="css/product.css?ver=1.3">
</head>
<body>
<h2>반출 상세 내역</h2>
<div class="division-line"></div><br/>

<div class="table-container">
    <table class="tbl_type">
        <tr>
            <th>반출 번호</th>
            <th>물품 등록 번호</th>
            <th>품목명</th>
            <th>품목 번호</th>
            <th>사원 이름</th>
            <th>사원 번호</th>
            <th>휴대폰 번호</th>
            <th>직급</th>
            <th>부서</th>
            <th>반출일</th>
            <th>반납일</th>
        </tr>
        <c:forEach var="lendDto" items="${lendList}">
        <tr>
            <td><span class="lend_no">${lendDto.lend_no}</span></td>
            <td><span class="reg_no">${lendDto.reg_no}</span></td>
            <td>${lendDto.pname}</td>
            <td>${lendDto.pno}</td>
            <td>${lendDto.name}</td>
            <td><span class="mno">${lendDto.mno}</td>
            <td>${lendDto.phone}</td>
            <td>${lendDto.job}</td>
            <td>${lendDto.deptno}</td>
            <td>${lendDto.order_date}</td>
            <td>${lendDto.fin_date}</td>
        </tr>
        </c:forEach>
    </table>
    <button type="button" id="lendReturn">반납 처리</button>
    <button type="button" class="lendList">반출 현황</button>
</div>
<script>   let rootPath = window.location.origin</script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="${rootPath}/js/product.js"></script>
</body>
</html>