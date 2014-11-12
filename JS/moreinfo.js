$(document).ready(function(){
	$(".moreinfo-button").click(function(){
		var classdata = $(this).attr("data");
		$("#more-info").removeClass().addClass(classdata).addClass("visible");
		$(".selected").removeClass("selected");
		$("#" + classdata).addClass("selected");
	});
});