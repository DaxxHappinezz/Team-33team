$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
});
$(document).on('click', '.page-box .btn.number', function() {
	$('.page-box .btn.number').removeClass('on');
	$(this).addClass('on');
	return false;
})
function redirectToWrite() {
	$.ajax({
		url: 'write.do', // 서버에서 글쓰기 양식을 가져오는 URL로 수정해야 함
		type: 'GET',
		success: function(data) {
			$('.view').html(data); // 응답 데이터로 페이지 내용을 업데이트
		},
		error: function() {
			alert('글쓰기 양식을 가져오는 데 실패했습니다.');
		}
	});
}

$(document).ready(function() {
	// 페이지 번호 링크를 클릭했을 때의 처리
	$('.btn.number').click(function(event) {
		event.preventDefault(); // 기본 동작 중단

		var pageUrl = $(this).attr('href'); // 클릭한 링크의 URL 가져오기

		// AJAX 요청
		$.ajax({
			url: pageUrl,
			type: 'GET',
			success: function(data) {
				// AJAX 요청이 성공하면 data를 적절한 방식으로 처리하여 페이지 업데이트
				// 예를 들어, 업데이트된 데이터를 DOM에 삽입하거나 다른 작업을 수행할 수 있습니다.
				// 이 예제에서는 간단히 예를 들기 위해 페이지 전체를 새로고침하도록 합니다.
				$('.view').html(data);
			},
			error: function() {
				// AJAX 요청이 실패한 경우 처리할 내용
				alert('오류가 발생했습니다.');
			}
		});
	});
});

$(document).ready(function() {
	$(".cancel").click(function(event) {
		event.preventDefault();
		pageUrl = 'list.do';

		$.ajax({
			url: pageUrl, // 이전 페이지의 URL을 가져옵니다.
			success: function(data) {
					$('.view').html(data);
			},
			error: function() {
				// 요청이 실패했을 때의 처리 작업을 여기에 작성합니다.
				alert('오류가 발생했습니다.');
			}
		});
	});
});
$(document).ready(function() {
	$('.modify-link').click(function(event) {
		event.preventDefault(); // 기본 동작 중단
		var title = $('input[name="title"]').val();
		var content = $('textarea[name="content"]').val();
		var linkUrl = $(this).attr('href'); // 클릭한 링크의 URL 가져오기
		// AJAX 요청
		$.ajax({
			url: linkUrl,
			type: 'GET',
			data: {
				title: title,
				content: content
			},
			success: function(data) {
				// AJAX 요청이 성공하면 가져온 데이터를 특정 영역에 삽입
				$('.view').html(data);
			},
			error: function() {
				// AJAX 요청이 실패한 경우 처리할 내용
				alert('오류가 발생했습니다.');
			}
		});
	});
});


$(document).ready(function() {
	// 게시물 제목 링크를 클릭했을 때의 처리
	$('.delete-link').click(function(event) {
		event.preventDefault(); // 기본 동작 중단

		var pageUrl = $(this).attr('href'); // 클릭한 링크의 URL 가져오기

		// AJAX 요청
		$.ajax({
			url: pageUrl,
			type: 'GET',
			success: function(res) {
				if (res) {
					alert("글 삭제가 완료되었습니다.");
					$.ajax({
						url: 'list.do',
						type: 'GET',
						success: function(data) {
							// AJAX 요청이 성공하면 data를 적절한 방식으로 처리하여 페이지 업데이트
							// 예를 들어, 업데이트된 데이터를 DOM에 삽입하거나 다른 작업을 수행할 수 있습니다.
							// 이 예제에서는 간단히 예를 들기 위해 페이지 전체를 새로고침하도록 합니다.
							$('.view').html(data);
						},
						error: function() {
							// AJAX 요청이 실패한 경우 처리할 내용
							alert('오류가 발생했습니다.');
						}
					});
				} else {
					alert("글 삭제에 실패했습니다.");
				}
			},
			error: function() {
				// AJAX 요청이 실패한 경우 처리할 내용
				alert('오류가 발생했습니다.');
			}
		});
});
});

