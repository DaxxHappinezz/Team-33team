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


				<section class="board-wrap write white pd30">
					
					
					
					
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
					
					
					
					
					
					<div class="division-line"></div>

					<ul class="board-write-form">

				
						<li class="nickname">
							<div class="write-form-left">
								<span>이름</span>
							</div>
							<div class="write-form-right">
								<input type="text" class="short" id="name" name="name"
									value="${memberInfo.name}" disabled>

							</div>
						</li>

						<li class="mno">
							<div class="write-form-left">
								<span>사원 번호</span>
							</div>
							<div class="write-form-right">
								<input type="text" class="short" id = "mno" name="mno" value="${memberInfo.mno}" disabled>
							</div>
						</li>
						<li class="content">
							<div class="write-form-left">
								<span>건의 내용</span>
							</div>
							<div class="write-form-right">
								<section>
									<div class="ttb-content">
										<div id="write_subject" class="ttb-editor"
											data-editor-height="250px" data-editor-width="500px"
											style="width: 500px; height: 250px;">
											<textarea class="ttb-editor" id="write_subject" name="title" style = "height:250px"></textarea>
										</div>
									</div>
								</section>
							</div>
						</li>

					</ul>

					<div class="button-wrap">
						<button type="button" class="submit" id="write">등록</button>
						<button type="button" class="cancel">취소</button>
						

					</div>


				</section>

				<aside class="main-right-container"></aside>
		</main>
	</div>
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script src="js/write.js"></script>
</body>
</html>