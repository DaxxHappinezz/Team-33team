$(function(){
  });
  $(document).ready(function() {
	// 페이지 번호 링크를 클릭했을 때의 처리
	$('#board').click(function(event) {
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
	$('#joinForm').click(function(event) {
		event.preventDefault(); // 기본 동작 중단

		var pageUrl = 'joinForm'; 

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
	$('#product').click(function(event) {
		event.preventDefault(); // 기본 동작 중단

		var pageUrl = 'product/regList'; 

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
	$('#memberList').click(function(event) {
		event.preventDefault(); // 기본 동작 중단

		var pageUrl = 'memberList'; 

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
	$('#productAddBtn').click(function(event) {
		event.preventDefault(); // 기본 동작 중단
		console.log("productAddBtn Click")
			var pageUrl = 'product/insert';

		// AJAX 요청
		$.ajax({
			url: pageUrl,
			type: 'GET',
			success: function(data) {
				console.log("ajax execute")
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
	$('#lendList').click(function(event) {
		event.preventDefault(); // 기본 동작 중단

			var pageUrl = 'product/lendList';
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
/*$(document).ready(function() {
    // 사원 메뉴를 클릭했을 때 해당 메뉴 아래의 서브메뉴를 토글하는 함수
    $('.menu-item1').click(function() {
        $(this).nextAll('.joinmenu').toggleClass('hidden1');
    });

    // 자원 메뉴를 클릭했을 때 해당 메뉴 아래의 서브메뉴를 토글하는 함수
    $('.menu-item2').click(function() {
        $(this).nextAll('.productmenu').toggleClass('hidden2');
    });
});*/
 $(document).ready(function() {
            // "사원"을 클릭하여 ▶와 ▼를 토글합니다.
            $(".menu-item1").click(function() {
                if ($("#toggleIcon1").text() === "▶") {
                    $("#toggleIcon1").text("▼");
                    $("#joinForm, #memberList").removeClass("hidden1");
                } else {
                    $("#toggleIcon1").text("▶");
                    $("#joinForm, #memberList").addClass("hidden1");
                }
            });
        });
 $(document).ready(function() {
            // "사원"을 클릭하여 ▶와 ▼를 토글합니다.
            $(".menu-item2").click(function() {
                if ($("#toggleIcon2").text() === "▶") {
                    $("#toggleIcon2").text("▼");
                    $("#productAddBtn, #product, #lendList").removeClass("hidden2");
                } else {
                    $("#toggleIcon2").text("▶");
                    $("#productAddBtn, #product, #lendList").addClass("hidden2");
                }
            });
        });