/**
 * 
 */


$(document).ready(function() {
	$('#write').click(function(event) {
		event.preventDefault(); // 기본 동작 중단

		// 입력한 데이터 가져오기
		var title = $('textarea[name="title"]').val();
		var mno = $('#mno').val();
		var name = $('#name').val();
        if (!title) {
            alert("건의 내용을 입력하세요.");
            return; // 함수 종료
        }
        if (title.length > 100){
			alert("100자 이내로 작성해주세요.");
            return; // 함수 종료
		}

		// AJAX 요청
		$.ajax({
			url: 'write', // 적절한 URL로 수정
			type: 'POST',
			data: {
				mno: mno,
				name: name,
				title: title,
			},
			success: function(res) {
				if (res) {
					alert("글 작성이 완료되었습니다.");
							var pageUrl = 'list'; // 클릭한 링크의 URL 가져오기

		// AJAX 요청
		$.ajax({
			url: pageUrl,
			type: 'GET',
			success: function(data) {
				// AJAX 요청이 성공하면 data를 적절한 방식으로 처리하여 페이지 업데이트
				// 예를 들어, 업데이트된 데이터를 DOM에 삽입하거나 다른 작업을 수행할 수 있습니다.
				// 이 예제에서는 간단히 예를 들기 위해 페이지 전체를 새로고침하도록 합니다.
			$('.mainView').html(data);
			},
			error: function() {
				// AJAX 요청이 실패한 경우 처리할 내용
				alert('오류가 발생했습니다.');
			}
		});
				} else {
					alert("글 작성에 실패했습니다.");
				}
			},
			error: function() {
				// AJAX 요청이 실패한 경우 처리할 내용
				alert('오류가 발생했습니다.');
			}
		});
	});
});

  $(document).ready(function() {
	// 페이지 번호 링크를 클릭했을 때의 처리
	$('.signup').click(function(event) {
		event.preventDefault(); // 기본 동작 중단

		var pageUrl = 'list'; // 클릭한 링크의 URL 가져오기

		// AJAX 요청
		$.ajax({
			url: pageUrl,
			type: 'GET',
			success: function(data) {
				// AJAX 요청이 성공하면 data를 적절한 방식으로 처리하여 페이지 업데이트
				// 예를 들어, 업데이트된 데이터를 DOM에 삽입하거나 다른 작업을 수행할 수 있습니다.
				// 이 예제에서는 간단히 예를 들기 위해 페이지 전체를 새로고침하도록 합니다.
			$('.mainView').html(data);
			},
			error: function() {
				// AJAX 요청이 실패한 경우 처리할 내용
				alert('오류가 발생했습니다.');
			}
		});
	});
});
  $(document).ready(function() {
	// 페이지 번호 링크를 클릭했을 때의 처리
	$('.login').click(function(event) {
		event.preventDefault(); // 기본 동작 중단

		var pageUrl = 'board'; // 클릭한 링크의 URL 가져오기

		// AJAX 요청
		$.ajax({
			url: pageUrl,
			type: 'GET',
			success: function(data) {
				// AJAX 요청이 성공하면 data를 적절한 방식으로 처리하여 페이지 업데이트
				// 예를 들어, 업데이트된 데이터를 DOM에 삽입하거나 다른 작업을 수행할 수 있습니다.
				// 이 예제에서는 간단히 예를 들기 위해 페이지 전체를 새로고침하도록 합니다.
			$('.mainView').html(data);
			},
			error: function() {
				// AJAX 요청이 실패한 경우 처리할 내용
				alert('오류가 발생했습니다.');
			}
		});
	});
});
  $(document).ready(function() {
	// 페이지 번호 링크를 클릭했을 때의 처리
	$('.page-link').click(function(event) {
		event.preventDefault(); // 기본 동작 중단

		var pageUrl =  $(this).attr('href');; // 클릭한 링크의 URL 가져오기

		// AJAX 요청
		$.ajax({
			url: pageUrl,
			type: 'GET',
			success: function(data) {
				// AJAX 요청이 성공하면 data를 적절한 방식으로 처리하여 페이지 업데이트
				// 예를 들어, 업데이트된 데이터를 DOM에 삽입하거나 다른 작업을 수행할 수 있습니다.
				// 이 예제에서는 간단히 예를 들기 위해 페이지 전체를 새로고침하도록 합니다.
			$('.mainView').html(data);
			},
			error: function() {
				// AJAX 요청이 실패한 경우 처리할 내용
				alert('오류가 발생했습니다.');
			}
		});
	});
});
    $(document).ready(function() {
        $('.article-link').click(function() {
            var articleNo = $(this).data('article-no');
            var contentRow = $('.article-content[data-article-no="' + articleNo + '"]');
            contentRow.toggle(); // 클릭할 때 내용 토글

            // 다른 내용을 닫기 위해 현재 클릭한 내용 이외의 내용을 숨깁니다.
            $('.article-content[data-article-no]').not(contentRow).hide();
        });
    });
     $(document).ready(function() {
        $('.reply-button').click(function() {
 			var bno = $(this).data('article-no');
            var content = $('.re-content').val();
         	if(!content){
				 alert('답변 내용을 적어주세요');
				 return;
			 }
			 
			pageUrl = 'reply/Update';
        $.ajax({
			url: pageUrl,
			data: {
				bno : bno,
				content : content
			},
			type: 'Post',
			success: function(data) {
					
							// AJAX 요청
							$.ajax({
								url: 'list',
								type: 'GET',
								success: function(data) {
									
									alert('답변 완료');
									
									// AJAX 요청이 성공하면 data를 적절한 방식으로 처리하여 페이지 업데이트
									// 예를 들어, 업데이트된 데이터를 DOM에 삽입하거나 다른 작업을 수행할 수 있습니다.
									// 이 예제에서는 간단히 예를 들기 위해 페이지 전체를 새로고침하도록 합니다.
								$('.mainView').html(data);
								},
								error: function() {
									// AJAX 요청이 실패한 경우 처리할 내용
									alert('오류가 발생했습니다.');
								}
							});
			},
			error: function() {
				// AJAX 요청이 실패한 경우 처리할 내용
				alert('오류가 발생했습니다.');
			}
		});
        });
    });