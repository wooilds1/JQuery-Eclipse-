function callServer(){
	
	// JavaScript로 서버쪽 프로그램을 호출
	// ajax를 이용해서 처리해 보아요!
	// 순수 JavaScript가 아닌 JQuery로 ajax를 이용
	$.ajax({
		// 호출한 서버쪽 프로그램의 url
		url : "http://localhost:8080/ajax/add",
		// type : 전송방식
		type : "get",
		// data : 서버로 전송할 데이터
		data : {
			first : $("#first").val(),
			second : $("#second").val()
		},
		success : function(data) {
			$("span").text(data);
		},
		error : function() {
			alert("뭔가 이상해요");
		}
	});
}
