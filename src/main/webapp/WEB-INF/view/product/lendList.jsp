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
<h2>반출 현황</h2>
<div class="division-line"></div>
<div class="table-container"><br/>
    
    <table class="tbl_type">
        <tr>
            <th width="80px">반출 번호</th>
            <th>품목명</th>
            <th width="80px">품목 번호</th>
            <th width="80px">사원 번호</th>
            <th>반출일</th>
            <th>반납일</th>
        </tr>
        <c:forEach var="lendDto" items="${lendList}">
        <tr>
            <td>${lendDto.lend_no}</td>
            <td><strong><a class="lendView" href="<c:url value='/product/lend_view?lend_no=${lendDto.lend_no}'/>">${lendDto.pname}</a></strong></td>
            <td>${lendDto.pno}</td>
            <td>${lendDto.mno}</td>
            <td>${lendDto.order_date}</td>
            <td>${lendDto.fin_date}</td>
        </tr>

        </c:forEach>
    </table>
    <%-- 페이징 처리 --%>
    <div class="page-box">
        <c:if test="${page.showPrev}">
            <a  class = "Search" href="<c:url value='/product/lendList?page=${page.beginPage -1}&pageSize=${page.pageSize}'/>">&lt;</a>
        </c:if>
        <c:forEach var="i" begin="${page.beginPage}" end="${page.endPage}">
            <a class = "Search" href="<c:url value='/product/lendList?page=${i}&pageSize=${page.pageSize}'/>">${i}</a>
        </c:forEach>
        <c:if test="${page.showNext}">
            <a  class = "Search" href="<c:url value='/product/lendList?page=${page.endPage +1}&pageSize=${page.pageSize}'/>">&gt;</a>
        </c:if>
    </div>
</div>

<script>   var rootPath = window.location.origin</script>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="${rootPath}/js/product.js"></script>
</body>
</html>