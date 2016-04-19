$(document).ready(function(){

	console.log("Script included!");

	$(".hide").click(function(){
		$(".photo").hide();
	});
	$(".directions li").click(function(){
		$(this).fadeTo("fast", 0.65);
	});
});

