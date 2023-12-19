$(document).ready(function() {
	// 페이지 번호 링크를 클릭했을 때의 처리
	$('#login').click(function(event) {
		event.preventDefault(); // 기본 동작 중단
        var mno= $('input[name="mno"]').val();
        var password = $('input[name="password"]').val();
		var pageUrl = 'login'; 
		if(!mno || !password){
			$("#wrongIdPassword").text("아이디 또는 비밀번호를 적어주세요");
			return;
			
		}
		// AJAX 요청
		$.ajax({
			url: pageUrl,
			type: 'POST',
			data:{
				mno:mno,
				password: password
			},
			success: function(data) {
			
				if(data === true){
					window.location.href = 'main';
				}else{
				  $("#wrongIdPassword").text("아이디 또는 비밀번호가 틀립니다.");
				}
				
			},
			error: function() {
				// AJAX 요청이 실패한 경우 처리할 내용
				alert('오류가 발생했습니다.');
			}
		});
	});
});