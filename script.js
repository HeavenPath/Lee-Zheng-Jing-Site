$(document).ready( function() {
	$("#mywebsite").click(function () {
		$("#mywebsite").load("http://wd.comsci.club/api/kv.php?key=arnolds-secret");
	});

	$.get("http://wd.comsci.club/api/kv.php?key=mycommentbox", function(data) {
		$("#comment-box").html(data);
	});

	$("#submit-comment").click(function () {
		var currentComments = $("#comment-box").html();
		var newComment = $("#comment-input").val();
		var allTheComments = currentComments + "<br>" + newComment;
		$.post("https://wd.comsci.club/api/kv.php?key=mycommentbox", {
			value: allTheComments
		});

		$("#comment-box").html( allTheComments );
		$("#comment-input").val("");
	});
} );