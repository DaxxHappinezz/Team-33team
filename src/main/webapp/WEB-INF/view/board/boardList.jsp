<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<title>게시글 쓰기</title>
</head>
<link rel="stylesheet" href="css/write.css?ver=1.3">
<body>


<h2>건의 하기</h2>
<div class="division-line"></div>

	<div id="wrap">

		<main id="main">
			<div class="main-left-container">


				<div class="container-fluid" id="container-fluid">
					<div class="row">
						<div class="col-lg-12">
				<div id="menubar">
					<c:if test="${memberInfo.deptno != 1 }">
						<ul>
							<button class="login">건의 하기</button>
							<button class="signup">나의 건의내역</button>
						</ul>
					</c:if>
					<c:if test="${memberInfo.deptno == 1 }">
						<ul>
							<button class="signup">건의목록보기</button>
						</ul>
					</c:if>
				</div>
							<div class="table-container">		
							<table cellspacing="0" border="1" summary="게시판의 글제목 리스트"
								class="tbl_type">
				
								<thead>
									<tr>
										<th scope="col">No</th>
										<th scope="col">건의 내용</th>
										<th scope="col">사원 번호</th>
										<th scope="col">날짜</th>
										<th scope="col">답변등록</th>
									</tr>
								</thead>
								<c:if test="${articlePage.hasNoArticles()}">
									<tr>
										<td colspan="4">게시글이 없습니다.</td>
									</tr>
								</c:if>
								<c:forEach var="article" items="${articlePage.content}">
									<tr>
										<td>${article.bno}</td>
										<td><a class="article-link" href="javascript:void(0);"
											data-article-no="${article.bno}"> <c:out
													value="${article.title}" />
										</a></td>
										<td>${article.mno}</td>
										<td>${article.date}</td>
										<td><c:if test="${empty article.content}">
											❌
											</c:if> <c:if test="${not empty article.content}">
											✅
											</c:if></td>
									</tr>
									<tr class="article-content" data-article-no="${article.bno}"
										style="display: none;">
										<td colspan="4"><c:if test="${memberInfo.deptno == 1 }">
												<c:if test="${empty article.content}">
													<!-- content가 비어있는 경우, 답변 입력 텍스트 에어리어 표시 -->
													<textarea class="re-content" id="replyText_${article.bno}"
														style="width: 400px; height: 100px; resize: none;"
														placeholder="답변을 입력하세요"></textarea>
													<button class="reply-button"
														data-article-no="${article.bno}">답변 완료</button>
												</c:if>
												<c:if test="${not empty article.content}">
													<!-- content가 이미 채워져 있는 경우, 기존 내용 표시 -->
													<textarea id="replyText_${article.bno}"
														style="width: 400px; height: 100px; resize: none;"
														disabled>${article.content}</textarea>
												</c:if>
											</c:if> <c:if test="${memberInfo.deptno != 1 }">
												<textarea id="replyText_${article.bno}"
													style="width: 400px; height: 100px; resize: none;" disabled>건의 하신 내용을 처리 중입니다.</textarea>
											</c:if></td>
									</tr>
								</c:forEach>
							</table>
							</div>
							<div class="page-box">
								<c:if test="${articlePage.hasArticles()}">

									<c:if test="${articlePage.startPage > 5}">
										<a class="btn number" id="nextButton"
											href="list?pageNo=${articlePage.startPage - 5}">[이전]</a>
									</c:if>
									<c:forEach var="pNo" begin="${articlePage.startPage}"
										end="${articlePage.endPage}">
										<a class="btn number page-link" id="nextButton"
											href="list?pageNo=${pNo}">${pNo}</a>
									</c:forEach>
									<c:if test="${articlePage.endPage < articlePage.totalPages}">
										<a class="btn number" id="nextButton"
											href="list?pageNo=${articlePage.startPage + 5}">[다음]</a>
									</c:if>
								</c:if>
								<div class='clearfix'></div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="js/write.js"></script>
</body>
</html>