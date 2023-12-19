
 $(document).ready(function() {
	// 페이지 번호 링크를 클릭했을 때의 처리
	$('.productAddBtn').click(function(event) {
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
	$('.lendList').click(function(event) {
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
 $(document).ready(function() {
	// 페이지 번호 링크를 클릭했을 때의 처리
	$('.productAddBtn').click(function(event) {
		event.preventDefault(); // 기본 동작 중단

			var pageUrl = 'product/insert';

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
	$('.reg_submit').click(function(event) {
		event.preventDefault(); // 기본 동작 중단

		var pageUrl = window.location.href;

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
	$('.productAddList').click(function(event) {
		event.preventDefault(); // 기본 동작 중단

		var pageUrl = '/product/regList';

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
	$('.regView').click(function(event) {
		event.preventDefault(); // 기본 동작 중단

		var pageUrl = $(this).attr('href');

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
        $('#lendsubmit').click(function() {
            // 입력된 데이터 가져오기
            var reg_no = $('#reg_no').val();
     		var mno = $('#mno').val();
     		var pno = $('#pno').val();
     		var pname = $('#pname').val();
				if(!mno || !reg_no){
					alert('사원번호와 품번을 확인해주세요')
					return;
				}

            // 데이터 검증 (필요한 경우)

            // AJAX 요청 보내기
            $.ajax({
                type: 'POST', // 또는 'GET' 등 필요한 HTTP 메서드 선택
                url: 'product/lend_submit', // 서버 엔드포인트 URL 설정
                data: {
                    reg_no: reg_no,
                    mno: mno,
					pno: pno,
					pname: pname
                },
                success: function(data) {
                    // 성공적으로 서버 응답을 받았을 때 처리할 코드
                    console.log('AJAX 요청 성공!');

                    $('.mainView').html(data);
                },
                error: function(xhr) {
                    // AJAX 요청 중 오류가 발생했을 때 처리할 코드
                }
            });
        });
    });
    $(document).ready(function() {
	$('.Search').click(function(event) {
		event.preventDefault(); // 기본 동작 중단

		var pageUrl = $(this).attr('href');
		
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
				console.log('상태 코드: ' + xhr.status);
				console.log('오류: ' + error);
			}
		});
	});
});
    $(document).ready(function() {
		// 페이지 번호 링크를 클릭했을 때의 처리
		$('.searchBtn').click(function(event) {
			event.preventDefault(); // 기본 동작 중단

			var pageUrl = 'product/search?pno='+$('#pno').val();
			if(!$('#pno').val()){
				alert('검색하실 품목을 선택해주세요');
				return;
			}
			// AJAX 요청
			$.ajax({
				url: pageUrl,
				type: 'GET',
				success: function(data) {
					// AJAX 요청이 성공하면 data를 적절한 방식으로 처리하여 페이지 업데이트
					// 예를 들어, 업데이트된 데이터를 DOM에 삽입하거나 다른 작업을 수행할 수 있습니다.
					// 이 예제에서는 간단히 예를 들기 위해 페이지 전체를 새로고침하도록 합니다.
					console.log("성공");
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
	 $('.lendView').click(function(event) {
		 event.preventDefault(); // 기본 동작 중단

		 var pageUrl = $(this).attr('href');

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
	 $('#lendReturn').click(function() {
		 // 입력된 데이터 가져오기
		 var lend_no = $('.lend_no').text();
		 var reg_no = $('.reg_no').text();
		 var mno = $('.mno').text();

		 if (confirm(`정말 반납 처리하시겠습니까?`)) {

		 } else {
			 alert('요청이 취소되었습니다.');
			 return;
		 }

		 // 데이터 검증 (필요한 경우)

		 // AJAX 요청 보내기
		 $.ajax({
			 type: 'POST',
			 url: 'product/lend_return', // URL 수정
			 data: {
				 lend_no: lend_no, // 파라미터 이름 맞춤
				 reg_no: reg_no,
				 mno: mno
			 },
			 success: function(data) {
				 // 성공적으로 서버 응답을 받았을 때 처리할 코드
				 console.log('AJAX 요청 성공!');
				 $('.mainView').html(data);
			 },
			 error: function() {
				 // AJAX 요청 중 오류가 발생했을 때 처리할 코드
				 console.log('AJAX 요청 실패!');
			 }
		 });
	 });
 });


function submitBtn(){

	var pno = $('#pno').val();
	var regQuantity = $('#reg_quantity').val();

	if(!pno || !regQuantity){
		alert('품목명과 수량을 확인해주세요');
		return;
	}

	if (regQuantity > 100) {
		alert('입력한 값의 수가 너무 큽니다.');
		return;
	}

	if (confirm(`"${regQuantity}"개를 등록하시겠습니까?`)) {

	} else {
		alert('물품 등록이 취소되었습니다.');
		return;
	}
	// AJAX 요청 보내기
	$.ajax({
		type: 'POST', // 또는 'GET' 등 필요한 HTTP 메서드 선택
		url: 'product/insert', // 서버 엔드포인트 URL 설정
		data: {
			pno: pno,
			reg_quantity: regQuantity
		},
		success: function(data) {
			// 성공적으로 서버 응답을 받았을 때 처리할 코드
			alert('물품 등록이 완료되었습니다.');
			$('.mainView').html(data);
		},
		error: function() {
			// AJAX 요청 중 오류가 발생했을 때 처리할 코드
			console.log('AJAX 요청 실패!');
		}
	});

}


