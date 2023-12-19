$(document).ready(function () {
    // 검색 버튼을 클릭했을 때
    $('.search').click(function (event) {
        event.preventDefault(); // 기본 동작 중단

        // 입력한 데이터 가져오기
        var type = $('.type').val();
        var keyword = $('.keyword').val();
        
        if (!type) {
             alert('검색 내용을 선택해 주세요.');
         return;
         
        }else {
			
		}
        
        
       	if (!keyword) {
             alert('검색할 내용을 입력하세요.');
         return;
         
        }else {
			
		}
        
        
        // AJAX 요청
        $.ajax({
            url: '/getSearchList', // 적절한 URL로 수정
            type: 'Get',
            data: {
                type: type,
                keyword: keyword,
                page: 1 // 검색 결과를 첫 번째 페이지로 설정
            },
            success: function (res) {
                $('.mainView').html(res);
            },
            error: function () {
                // AJAX 요청이 실패한 경우 처리할 내용
                alert('오류가 발생했습니다.');
            }
        });
    });
});

    // 페이지 번호 링크를 클릭했을 때의 처리
    $(document).on('click', '.search_page', function (event) {
        event.preventDefault(); // 기본 동작 중단
	

	
	
			
	$(this).prop('disabled', true);
		
       var pageUrl = $(this).attr('href');
       console.log(pageUrl);

        // AJAX 요청
        $.ajax({
            url: pageUrl,
            type: 'GET',
            success: function (data) {
                // AJAX 요청이 성공하면 data를 적절한 방식으로 처리하여 페이지 업데이트
                $('.mainView').html(data);
            },
            error: function () {
                // AJAX 요청이 실패한 경우 처리할 내용
                alert('오류가 발생했습니다.');
            },
            complete: function () {
            // AJAX 요청 완료 후 버튼 다시 활성화
            $('.search_page').prop('disabled', false);
        }
        });
    });

    // 페이지 번호 링크를 클릭했을 때의 처리
    $(document).on('click', '.readMemeber', function (event) {
        event.preventDefault(); // 기본 동작 중단
		
		$(this).prop('disabled', true);
		
        var pageUrl = $(this).attr('href');
		
		console.log(1);
		
        // AJAX 요청
        $.ajax({
            url: pageUrl,
            type: 'GET',
            success: function (data) {
                // AJAX 요청이 성공하면 data를 적절한 방식으로 처리하여 페이지 업데이트
                $('.mainView').html(data);
            },
            error: function () {
                // AJAX 요청이 실패한 경우 처리할 내용
                alert('오류가 발생했습니다.');
            },
            complete: function () {
            // AJAX 요청 완료 후 버튼 다시 활성화
            $('.search_page').prop('disabled', false);
        }
        });
    });

    $(document).on('click', '.mainpage', function (event) {
        event.preventDefault(); // 기본 동작 중단
		
		$(this).prop('disabled', true);
		
        var pageUrl = $(this).attr('href');
		console.log(2);
        // AJAX 요청
        $.ajax({
            url: pageUrl,
            type: 'GET',
            success: function (data) {
                // AJAX 요청이 성공하면 data를 적절한 방식으로 처리하여 페이지 업데이트
                $('.mainView').html(data);
            },
            error: function () {
                // AJAX 요청이 실패한 경우 처리할 내용
                alert('오류가 발생했습니다.');
            },
            complete: function () {
            // AJAX 요청 완료 후 버튼 다시 활성화
            $('.search_page').prop('disabled', false);
        }
        });
    });



function openMemberWindow(url) {
  // 화면 중앙에 위치하도록 새 창 열기
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const windowWidth = 900; // 새 창의 너비
  const windowHeight = 300; // 새 창의 높이
  const left = (screenWidth - windowWidth) / 3;
  const top = (screenHeight - windowHeight) / 4;

  const windowFeatures = `width=${windowWidth},height=${windowHeight},left=${left},top=${top}`;
  window.open(url, 'MemberWindow', windowFeatures);
}



