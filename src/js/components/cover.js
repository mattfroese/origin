$(document).ready(function() {

	if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
		window.addEventListener("orientationchange", resizeBackground, false);
	} else {
		$(window).resize(resizeBackground);
	}
	function resizeBackground() {
		$(".multi-cover").height($(window).height());
	}
	resizeBackground();
	$(".multi-cover").owlCarousel({
		singleItem: true,
		addClassActive: true,
		autoPlay: 10000,
		pauseOnHover: true,
    	navigation : true,
    	navigationText : ["<i class=\"material-icons\">navigate_before</i>","<i class=\"material-icons\">navigate_next</i>"]
	});

});
