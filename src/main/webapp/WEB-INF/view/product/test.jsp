<%--
  Created by IntelliJ IDEA.
  User: 1
  Date: 2023-09-12
  Time: 오후 4:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<div class="page-box">
    <c:if test="${totalPages > 1}">
        <ul class="pagination">
            <li class="<c:if test="${page == 1}">disabled</c:if>">
                <c:if test="${page > 1}">
                    <a class="search_page" href="/memberList?page=${page - 1}" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </c:if>
            </li>
            <c:forEach begin="1" end="${totalPages}" var="pageNumber">
                <li class="<c:if test="${page == pageNumber}">active</c:if>">
                    <a class="search_page" href="/memberList?page=${pageNumber}">${pageNumber}</a>
                </li>
            </c:forEach>
            <li class="<c:if test="${page == totalPages}">disabled</c:if>">
                <c:if test="${page < totalPages}">
                    <a class="search_page" href="/memberList?page=${page + 1}" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </c:if>
            </li>
        </ul>
    </c:if>
</div>

</body>
</html>
