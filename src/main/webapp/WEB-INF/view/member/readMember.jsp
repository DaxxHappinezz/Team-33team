<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>사원 등록</title>
</head>
<link rel="stylesheet" href="css/readMember.css?ver=1.3">
<body>

<div class="infoBar">
<h1>사원 상세정보</h1>
<div class="division-line"></div>
</div>
<br/>


	
<div class="table-container">
	<div class="emoji">👤</div>
			
    <table cellspacing="0" class="tbl_type">
    
        <tr>
            <th width="80px">사번</th><td>${member.mno}</td> 
        </tr> 
        <tr>   
            <th width="80px">이름</th><td>${member.name}</td> <!-- </td>를 추가하고 -->
        </tr>
        <tr>    
            <th width="100px">연락처</th><td>${member.phone}</td> <!-- </td>를 추가하고 -->
        </tr>    
        <tr>  
            <th width="100px">입사일</th><td>${member.getFormattedHiredate()}</td> <!-- </td>를 추가하고 -->
        </tr>
        <tr> 
            <th width="80px">직급</th><td>${member.job}</td> <!-- </td>를 추가하고 -->
        </tr>
        <tr> 
            <th width="80px">부서</th><td>${member.dname}</td> <!-- </td>를 추가하고 -->
        </tr>  
        <tr> 
            <th width="80px">부서 위치</th><td>${member.loc}</td> <!-- </td>를 추가하고 -->
        </tr>
    </table>
</div>
<br/>	
<a class="mainpage" href="memberList?p=${param.p}">목록보기</a>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="js/memberList.js"></script>

</body>
</html>
